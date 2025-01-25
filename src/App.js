import React, {useState} from 'react';
import {View, TouchableOpacity, Text, StyleSheet, Dimensions} from 'react-native';

const FlexWrapLayout = () => {
  const [flexWrap, setFlexWrap] = useState('wrap');

  return (
    <View style={styles.container}>
      <TopView />
      <MiddleView />
      <BottomView />
    </View>
  );
};

const TopView = () => {
  const selectedDate = new Date(); 
  return (
    <View style={styles.topView}>
      <TopViewSection content="January" backgroundColor="#EBB1B1FF" />
      <TopViewSection content="1月2025" backgroundColor="#BBD4B4FF" />
      <TopViewSection content="" backgroundColor="#B4BBD4FF" />
      <TopViewSection content="Week 4" backgroundColor="#D4B4C8FF" />
      </View>
  );
};

const MiddleView = () => {
  return (
    <View style={styles.middleView}>
      <MiddleViewSection />
      <MiddleViewSection />
      <MiddleViewSection />
      <MiddleViewSection />
      <MiddleViewSection />
      <MiddleViewSection />
      <MiddleViewSection />
    </View>
  );
};

const BottomView = () => {
  return (
    <View style={styles.bottomView}>
      <BottomViewSection />
      <BottomViewSection />
      <BottomViewSection />
      <BottomViewSection />

    </View>
  );
};


const TopViewSection = props => {
  return (
    <View style={[styles.topViewSection, { backgroundColor: props.backgroundColor }]}>
      <Text style={styles.topViewSectionText}>{props.content}</Text>

    </View>
  );
};


//date card
const MiddleViewSection = props => {
  return (
    <View style={styles.middleViewSection} backgroundColor={props.backgroundColor}>
      <DateCard />
      <TaskList />
    </View>
    
  );
};

const DateCard = () => {
  return (
    <View style={styles.dateCard}>
      <View style={styles.dateCardTop}>25</View>
      <View style={styles.dateCardBottom}>Sat</View>
    </View>
    
  );
};

const TaskList = () => {
  return (
    <View style={styles.taskList}>Morning Sex @ 10:00</View>
    
  );
};


const BottomViewSection = () => {
  return (
    <View style={styles.bottomViewSection}>bottomSection</View>
  );
};


const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    height: Dimensions.get('window').height,
    borderWidth: 1,
  },


  topView: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0)',
    
    flexDirection: 'row',
    justifyContent: 'center',
  },
  topViewSection: {
    flex: 1,

    borderColor: 'white',
    borderRadius: 10,
    justifyContent: 'center',
  },
  topViewSectionText: {
    width: '100%',
    height: '100%',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'center',
    color: 'white',

    
  },


  middleView: {
    flex: 14,
    backgroundColor: 'blue',
  },
  middleViewSection: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#D4B4B4FF',
    borderWidth: 1,
  },
  dateCard: {
    flex: 1,
    minWidth: 106,
    maxWidth: 150,
    backgroundColor: 'red',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  dateCardTop: {
    flex: 1,
    fontSize: 42,
    marginBottom: 0,
    backgroundColor: 'blue',
    justifyContent: 'flex-end',
  },
  dateCardBottom: {
    flex: 1,
    backgroundColor: 'green',
    justifyContent: 'flex-start',
  },
  taskList: {
    flex: 5,
    backgroundColor: 'green',
  },

  bottomView: {
    flex: 2,
    backgroundColor: 'green',
    flexDirection: 'row',
  },
  bottomViewSection: {
    flex: 1,
    backgroundColor: '#D4B4B4FF',
    borderWidth: 1,
  },  
});


export default FlexWrapLayout;