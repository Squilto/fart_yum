import { View, Text, Button, Pressable } from 'react-native'
import React, {useState} from 'react'
import { TextInput } from 'react-native-gesture-handler';

//parent component
const Children_and_states = () => {
    const[name,setName]=useState("");

    const[count, SetCount]=useState(1);
    
    //const EventHandling=()={
    //    alert();
        

  //  };

    const EventHandling1=()=>{
        alert("Button pressed")
    };

  return (
    <View>
      <Text style={{fontSize:45, color:"blue"}}>Parent Props</Text>
      <ChildFunction name="Calgary" age="42"></ChildFunction>
      <Text>Counter is: {count}</Text>
      <Button title="Increment" onPress={()=>SetCount(count+1)}></Button>
      <Text style={{fontSize:45, textAlign:"center"}}>Hello {name}</Text>
      <Pressable>
        <TextInput placeholder='Enter Name:' onChangeText={()=>useState('')}></TextInput>
      </Pressable>
      <Button title="ChangeName" onPress={()=>setName.name}></Button>
    </View>
  );
};

const ChildFunction=(x:any)=>{
    return(
        <View>
            <Text style={{fontSize:45, color:"blue"}}>Child Props</Text>
            <Text>{x.name}</Text>
            <Text style={{color:"blue",fontSize:45}}>{x.a}</Text>
            <Text style={{color:"brown",fontSize:34}}> {x.title}</Text>
            <Text style={{color:"black",fontSize:34}}> {x.description}</Text>
        </View>

    );

};

const ChildFunction1=(props:any)=>{
    return(
        <View>
            <Button title="PressMe" onPress={props.onClick}></Button>
            <Button title="Submit" onPress={props.onChange}></Button>
        </View>
    );

};

export default Children_and_states;