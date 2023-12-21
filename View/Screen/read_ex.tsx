import {ChevronDown} from 'lucide-react-native';
import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
} from 'react-native';
import Collapsible from 'react-native-collapsible';
import brandingColor from '../components/branding_color';
import BoldText from '../components/bold_text';

const CollapsibleExample = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleCollapse}>
        <ChevronDown
          color={brandingColor.blueBlack100}
          size={23}
          strokeWidth={2}
        />
      </TouchableOpacity>

      {/* Collapsible content */}
      <Collapsible collapsed={isCollapsed} align="center">
        <FlatList
          data={[...Array(4)]}
          renderItem={({}) => (
            <View style={styles.container}>
              <View style={{}}>
                <Image source={require('./../../assets/Donut_Chart.png')} />
                <BoldText
                  contentT={'Progress'}
                  colorT={brandingColor.blueBlack100}
                  backColorI={''}
                  fontSizeT={13}
                  paddingVer={0}
                  paddingHor={0}
                />
              </View>
            </View>
          )}
          numColumns={2}
        />
      </Collapsible>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '50%',

    padding: 6,
  },
  itemContainer: {
    borderRadius: 16,
    justifyContent: 'center',
    paddingLeft: 10,
    height: 70,

    backgroundColor: brandingColor.blue30,
  },
  gridNameStyle: {
    fontWeight: 'bold',
    fontSize: 15,
    color: brandingColor.blueBlack100,
  },
});

export default CollapsibleExample;
