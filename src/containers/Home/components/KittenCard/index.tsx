import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

import {IKitten} from 'types/kitten';
import {styles} from './styles';

interface IProps {
  index: number;
  data: IKitten;
  onPress?: () => void;
}

function KittenCard({data, index, onPress}: IProps) {
  const [isLoading, setIsLoading] = React.useState(true);
  let isLoadedOnce = React.useRef(false).current;

  const onImageLoadStart = React.useCallback(() => {
    if (!isLoadedOnce) {
      setIsLoading(true);
    }
  }, [isLoadedOnce]);

  const onImageLoadEnd = React.useCallback(() => {
    if (!isLoadedOnce) {
      setIsLoading(false);
      isLoadedOnce = true;
    }
  }, [isLoadedOnce]);

  const loadingStyle = {opacity: isLoading && !isLoadedOnce ? 0.1 : 1};

  const renderMainCard = React.useMemo(() => {
    return (
      <View style={loadingStyle}>
        <TouchableOpacity
          onPress={onPress}
          style={{
            ...styles.container,
            marginLeft: index % 2 === 0 ? 0 : 16,
          }}>
          <Text style={styles.name}>{data.name}</Text>
          <Image
            source={{uri: data.image.uri}}
            onLoadStart={onImageLoadStart}
            onLoadEnd={onImageLoadEnd}
            style={styles.image}
          />
          <Text style={styles.info}>
            {data.info.length > 60 ? `${data.info.slice(0, 60)}...` : data.info}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }, [loadingStyle]);

  return (
    <View testID={`kitten-card-${index}`}>
      {renderMainCard}
      {isLoading && !isLoadedOnce && (
        <View style={{position: 'absolute', top: 0, left: 0}}>
          <SkeletonPlaceholder>
            <View
              style={[
                styles.container,
                styles.skeletonContainer,
                {marginLeft: index % 2 === 0 ? 0 : 16},
              ]}>
              <View style={styles.skeletonName} />
              <View style={styles.skeletonImage} />
              <View style={styles.skeletonInfo} />
            </View>
          </SkeletonPlaceholder>
        </View>
      )}
    </View>
  );
}

export default KittenCard;
