import {Config} from 'api/config';
import React from 'react';
import {IGetAKittenRequest, IKitten} from 'types/kitten';
import {
  getRandomInt,
  randomNameGenerator,
  randomWidthHeightGenerator,
} from 'utils';

function useKittyGenerator() {
  const maxSize = 200;
  const minSize = 96;
  const initialNumberOfKittens = 5;

  const [kittens, setKittens] = React.useState<Array<IKitten>>([]);

  React.useEffect(() => {
    getAllKittens();
  }, [kittens]);

  const getAKitten = async () => {
    const {width, height}: IGetAKittenRequest = randomWidthHeightGenerator(
      minSize,
      maxSize,
    );
    let name: string = randomNameGenerator(getRandomInt(4, 10));
    let kittensTemp = kittens.slice();
    /**
     * check if this kitten name already exists
     */
    const kittenNameIndex = kittensTemp.findIndex(el => el.name === name);
    while (kittenNameIndex > -1) {
      name = randomNameGenerator(getRandomInt(4, 10));
    }
    /**
     * check if this kitten already exists
     */
    const kittenImageIndex = kittensTemp.findIndex(
      el => el.image.uri === `${Config.API_URL}/${width}/${height}`,
    );
    if (kittenImageIndex > -1) {
      getAllKittens();
    } else {
      kittensTemp.push({
        image: {uri: `${Config.API_URL}/${width}/${height}`, width, height},
        name,
      });
      setKittens(kittensTemp);
    }
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
    [],
  );

  return values;
}

export default useKittyGenerator;
