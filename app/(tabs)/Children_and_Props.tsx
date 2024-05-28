import { View, Text } from 'react-native'
import React from 'react'
 
const Custom_text = () => {
  let a=20;
  return (
    <View>
     
      <Text >Custom_text {a}</Text>
 
      <Childcomponent title="Hello world" description="This is a description of the props"/>
      <Childcomponent title="Book Name" description="This is a Book for react course "/>
      <Childcomponent title="class1"  description="This is a class  for react course "/>
      <Childcomponent a={a}/>
    </View>
  );
};
const Childcomponent=(props:any)=>
  {
    return(
      <View>
        <Text style={{color:"blue",fontSize:45}}>{props.a}</Text>
        <Text style={{color:"brown",fontSize:34}}> {props.title}</Text>
        <Text style={{color:"black",fontSize:34}}> {props.description}</Text>
      </View>
 
    );
  };
export default Custom_text;