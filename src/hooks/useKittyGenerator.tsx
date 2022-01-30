import {Config} from 'api/config';
import React from 'react';
import {IKitten} from 'types/kitten';
import {getRandomInt, randomNameGenerator, sWidth} from 'utils';

interface IProps {
  disableFetching?: boolean;
}

export const initialNumberOfKittens = 16;

function useKittyGenerator({disableFetching}: IProps) {
  const maxSize = Math.round(sWidth / 2) > 200 ? 200 : Math.round(sWidth / 2);
  const kittenDescription =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

  const [kittens, setKittens] = React.useState<Array<IKitten>>([]);

  React.useEffect(() => {
    if (!disableFetching) {
        console.log("fetching...............")
      getAllKittens();
    }
  }, [kittens]);

  const getAKitten = async () => {
    let name: string = randomNameGenerator(getRandomInt(4, 10));
    let kittensTemp = kittens.slice();
    /**
     * check if this kitten name already exists
     */
    const kittenNameIndex = kittensTemp.findIndex(el => el.name === name);
    while (kittenNameIndex > -1) {
      name = randomNameGenerator(getRandomInt(4, 10));
    }
    kittensTemp.push({
      image: {
        uri: `${Config.API_URL}/${maxSize}/${maxSize}?image=${
          kittens.length + 1
        }`,
        width: maxSize,
        height: maxSize,
      },
      name,
      info: kittenDescription,
    });
    setKittens(kittensTemp);
  };

  const getAllKittens = () => {
    if (kittens.length !== initialNumberOfKittens) {
      getAKitten();
    }
  };

  let values = React.useMemo(
    () => ({
      kittens,
    }),
    [kittens],
  );

  return values;
}

export default useKittyGenerator;
