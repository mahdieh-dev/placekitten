import {Config} from 'api/config';
import React from 'react';
import {IKitten} from 'types/kitten';
import {getRandomInt, randomNameGenerator, sWidth} from 'utils';

interface IProps {
  count?: number;
}

function useKittyGenerator({count = 0}: IProps) {
  const maxSize = Math.round(sWidth / 2) > 200 ? 200 : Math.round(sWidth / 2);
  const initialNumberOfKittens = 16;

  const [kittens, setKittens] = React.useState<Array<IKitten>>([]);
  const [kittensCount, setKittensCount] = React.useState<number>(
    initialNumberOfKittens,
  );

  React.useEffect(() => {
    getAllKittens();
  }, [kittens]);

  React.useEffect(() => {
    if (count > 0) {
      setKittensCount(count);
      getAllKittens();
    }
  }, [count]);

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
    });
    setKittens(kittensTemp);
  };

  const getAllKittens = () => {
    if (kittens.length !== kittensCount) {
      getAKitten();
    }
  };

  let values = React.useMemo(
    () => ({
      kittens,
    }),
    [],
  );

  return values;
}

export default useKittyGenerator;
