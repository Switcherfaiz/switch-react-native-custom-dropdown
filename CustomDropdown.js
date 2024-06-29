import { StyleSheet, Text, View, ScrollView, Pressable } from 'react-native'
import React, { useState,forwardRef,useImperativeHandle, useEffect, useRef } from 'react'
import { Switch_icons } from '../assets/Switch_icons/switch_icons';


const CustomDropdown = forwardRef(({drop_items,drop_styles,drop_selected,drop_scrollbar_hidden,onChange},ref) => {
  const [drop_reveal,set_drop_reveal]=useState(false);
  const selected_index_intro=Math.min(Math.max(0,drop_selected-1),drop_items.length);
  const [selected_index,set_selected_index]=useState(0);
  const [key,set_key]=useState(drop_items[selected_index_intro].id);
  const [value,set_value]=useState(drop_items[selected_index_intro].value);
  
  const initial_render=useRef(true);
  useImperativeHandle(ref,()=>({
    getvalue:()=>{
      return value;
    },
    getkey:()=>{
      return key;
    },
  }))

  useEffect(()=>{
    if(initial_render.current)
      {
        initial_render.current=false;
      }
    else if(onChange)
      {
        onChange(key,value);
      }
  },[key,value])

  return (
    
    // Whole drop down
    <View style={[styles.overridden_drop_styles,{width:drop_styles.width}]}>

    {/* selected  */}
    <Pressable onPress={()=>{
      set_drop_reveal(!drop_reveal);
    }}>
    <View style={[styles.overridden_selected_style,drop_styles.ItemSelectedStyle,{height:drop_styles.height}]} >

    <Text style={[styles.drop_item,{color:drop_styles.color}]} numberOfLines={1} ellipsizeMode='tail'>{value}</Text>
    <Switch_icons style={{transform:drop_reveal?'rotateX(180deg)':'rotateX(0deg)'}} name='icon_chevron_down' color={drop_styles?drop_styles.color:''} size={20}></Switch_icons>
    </View>
    </Pressable>

      {/* Dropdown items  */}
      <View style={drop_reveal?styles.drop_active:styles.drop_inactive}>
        
        <ScrollView nestedScrollEnabled={true} style={drop_styles.ItemContStyle} contentContainerStyle={{gap:drop_styles.ItemContStyle.gap}} showsVerticalScrollIndicator={!drop_scrollbar_hidden}
        >

          {drop_items?drop_items.map((item,index)=>{
          return(
            <Pressable 
            onPress={()=>{
              set_value(item.value);
              set_key(item.id);
              set_selected_index(index);
              set_drop_reveal(false);
              
            
            }}
            style={[styles.cont_items_style,drop_styles.ItemStyle]} key={index}>
              <Text style={[styles.drop_item,{color:drop_styles.color}]} numberOfLines={1} ellipsizeMode='tail'>{item.value}</Text>
            </Pressable>
          )
        }):
        
          <View style={[styles.cont_items_style,{paddingVertical:drop_styles.ItemVerticalPadding}]}>
              <Text style={[styles.drop_item,{color:drop_styles.color}]}>No items</Text>
          </View>
        }

        </ScrollView>

      </View>

    </View>
  )
}) 

export default CustomDropdown

const styles = StyleSheet.create({
  overridden_drop_styles:{
    
  },
  overridden_selected_style:{
    flexDirection:'row',
  },
    cont_items_style:{
      width: '100%',
    },
    drop_item:{
      fontFamily:'Inter-Regular',
      maxWidth: '90%',
    },
    drop_active:{
      height: 'auto',
    },
    drop_inactive:{
      height:0,
    },

})