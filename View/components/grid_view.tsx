import React, {useState} from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import brandingColor from './branding_color';
import BoldText from './bold_text';
import {ChevronDown, ChevronUp} from 'lucide-react-native';
import Collapsible from 'react-native-collapsible';

interface GridProps {
  gridName: string;

  langthList: number;
}

const numColumns = 2; // Set the number of columns in your grid

const GridView = ({gridName, langthList}: GridProps) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <View style={{marginBottom: 20}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={[styles.gridNameStyle]}>{gridName}</Text>
        <TouchableOpacity onPress={toggleCollapse}>
          {isCollapsed && (
            <ChevronDown
              color={brandingColor.blueBlack100}
              size={23}
              strokeWidth={2}
            />
          )}
          {!isCollapsed && (
            <ChevronUp
              color={brandingColor.blueBlack100}
              size={23}
              strokeWidth={2}
            />
          )}
        </TouchableOpacity>
      </View>
      <Collapsible collapsed={isCollapsed} align="center">
        <FlatList
          data={[...Array(langthList)]}
          renderItem={({}) => (
            <View style={styles.container}>
              <View style={styles.itemContainer}>
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
          numColumns={numColumns}
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

export default GridView;
