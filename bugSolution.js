import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

const MyComponent = () => {
  const [imageLoaded, setImageLoaded] = React.useState(false);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    // Simulate an image load that might fail
    setTimeout(() => {
      const success = Math.random() < 0.5; // 50% chance of success
      if (!success) {
        setError(new Error('Image load failed'));
      }
      setImageLoaded(success);
    }, 2000);
  }, []);

  if (error) {
    return (
      <View style={styles.container}>
        <Text>Error loading image: {error.message}</Text>
      </View>
    );
  }

  if (!imageLoaded) {
    return (
      <View style={styles.container}>
        <Text>Loading image...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://via.placeholder.com/150' }}
        style={styles.image}
        onLoadEnd={() => {console.log('Image loaded successfully')}}
        onError={(error) => {setError(error); console.log('Image load failed', error)}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 150,
    height: 150,
  },
});

export default MyComponent;