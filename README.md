# switch-react-native-custom-dropdown

A custom dropdown component for React Native made by Switcher.faiz.

## Installation

```bash
npm install switch-react-native-custom-dropdown
```

# Usage
```bash
import React, { useRef } from 'react';
import { View, StyleSheet,Pressable,Text } from 'react-native';
import CustomDropdown from 'switch-react-native-custom-dropdown';
import { SafeAreaView } from 'react-native-safe-area-context'

const mydrop_data=[
    {'id':'12','value':'Select equipment'},
    {'id':'32','value':'First Equipment'},
    {'id':'34','value':'Second equipment'},
    {'id':'11','value':'Third'},
];

export default function App(){
    const dropRefference=useRef();
    const sendValues=()=>{
      console.log(dropRefference.current.getvalue());
      console.log(dropRefference.current.getkey());
    }

return(
        
<SafeAreaView style={{flex:1}}>

<CustomDropdown ref={dropRefference} parent_scroll_enabled={false} drop_scrollbar_hidden={false} drop_styles={styles.drop_styles} drop_items={mydrop_data} drop_selected={1} onChange={()=>{
  console.log('changed')
}}>Update</CustomDropdown>

<Pressable onPress={sendValues}><Text>Get value</Text></Pressable>


</SafeAreaView>
)
}


const styles=StyleSheet.create({
    drop_styles:{
        color:'white',
        width:200,
        fontFamily:'Inter-Regular',
        fontSize:3.5,
        height:45,
        ItemContStyle:{
            maxHeight:200,
            marginTop:5,
            gap:5,
            backgroundColor:'#292929',
            borderRadius:10
        },
        ItemSelectedStyle:{
            alignItems:'center',
            justifyContent:'space-between',
            color:'white',
            backgroundColor:'black',
            paddingHorizontal:5,
            borderColor:'white',
            borderWidth:1,
            borderRadius:10,
        },
        ItemStyle:{
            paddingVertical:10,
            paddingHorizontal:5,
            borderRadius:10
        },
    },
})
```

## Props

| Prop Name              | Type       | Description                                                                            | Default Value |
|------------------------|------------|----------------------------------------------------------------------------------------|---------------|
| `drop_items`           | `array`    | List of items to display in the dropdown. Each item should be an object with `id` and `value` properties. | `[]`          |
| `drop_styles`          | `object`   | Custom styles for the dropdown component.                                              | `{}`          |
| `drop_selected`        | `number`   | The index of the initially selected item.                                              | `0`           |
| `drop_scrollbar_hidden`| `boolean`  | Determines if the scrollbar in the dropdown should be hidden.                          | `false`       |
| `parent_scroll_enabled`| `boolean`  | Determines if the parent component's scroll should be enabled.                         | `true`        |
| `onChange`             | `function` | Callback function triggered when an item is selected.                                  | `null`        |


# Styling the Items container
```bash
ItemContStyle:{
            maxHeight:200,
            marginTop:5,
            gap:5,
            backgroundColor:'#292929',
            borderRadius:10
        },
```

# Styling the selected item or seen item
```bash
ItemSelectedStyle:{
            alignItems:'center',
            justifyContent:'space-between',
            color:'white',
            backgroundColor:'black',
            paddingHorizontal:5,
            borderColor:'white',
            borderWidth:1,
            borderRadius:10,
        },
```
# Styling the actual item 
```bash
ItemStyle:{
            paddingVertical:10,
            paddingHorizontal:5,
            paddingHorizontal:4,
            borderRadius:10
        },
```

# Get dropdown selected key and value use reference variable declared by useRef prop for your Custom dropdown

```bash
const dropRefference=useRef();
    const sendValues=()=>{
      console.log(dropRefference.current.getvalue());
      console.log(dropRefference.current.getkey());
    }

<CustomDropdown ref={dropRefference} parent_scroll_enabled={false} drop_scrollbar_hidden={false} drop_styles={styles.drop_styles} drop_items={mydrop_data} drop_selected={1} onChange={()=>{
  console.log('changed')
}}>Update</CustomDropdown>

<Pressable onPress={sendValues}><Text>Get value</Text></Pressable>
```
# Get dropdown value when onChange fired ,using key and value parameters respectively or ref also
```bash
<CustomDropdown ref={dropRefference} parent_scroll_enabled={false} drop_scrollbar_hidden={false} drop_styles={styles.drop_styles} drop_items={mydrop_data} drop_selected={1} onChange={(key,value)=>{
  console.log(key,value);
  console.log(dropRefference.current.getvalue());
  console.log(dropRefference.current.getkey());
}}>Update</CustomDropdown>
```