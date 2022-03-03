import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: '',
 
  products:[
    {
      id: 1,
      image:"https://i.ytimg.com/vi/hrozhYx_mQE/maxresdefault.jpg", 
      name: "French fries",
      category: "breakfast",
      price: "70",
      description:
      "French fries, chips, finger chips, french-fried potatoes, or simply fries, are batonnet or allumette-cut deep-fried potatoes, originating from either Belgium or France.  " },
  
    {
      id: 2,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk8-Fn3qD9ZHnaMgCN34gHvIoqPUvwgNE7-A&usqp=CAU",
      name: "Cold-Coffee",
      
      price: "100",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis. "
       },
    {
      id: 3,
      image: "https://www.dealsshutter.com/blog/wp-content/uploads/2019/06/pizza35.jpg",
      name: "Peppy Paneer Pizza",
      price: "200",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis. "
          },
    {
      id: 4,
      image: "https://pubg-cafe.com/wp-content/uploads/2020/11/masala.jpg",
      name: "Masala Maggi",
      category: "breakfast",
      price: "50",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis. "
       },
    {
      id: 5,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0S2eJTPK_elmbhx7Rz-FCcryNXBLdPFO5bg&usqp=CAU",
      name: "Chilli Garlic Potato Shots",
      category: "evening",
      price: "120",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis. "
        },
    {
      id: 6,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeMJLzv-zfSiRK2H5Cghw05GMB2FBGgNrSjw&usqp=CAU",
       name: "Chinese bhel",
      category: "Breakfast",
      price: "100",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis . "
      },
    {
      id: 7,
      image: "https://www.whiskaffair.com/wp-content/uploads/2020/07/Oreo-Milkshake-2-3.jpg",
      name: "Oreo MilkShake",
     price: "150",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis . ",
    },
    {
      id: 8,
      image: "https://www.biggerbolderbaking.com/wp-content/uploads/2015/05/BBB71-Homemade-Ice-Cream-Milkshakes-Thumbnail-v.1.jpg",
      name: "Ice Cream Milkshake",
      price: "150",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis. "
         },
    {
      id: 9,
      image: "https://images-gmi-pmc.edge-generalmills.com/7c1096c7-bfd0-4806-a794-1d3001fe0063.jpg",
      name: "Fudge Ice-Cream Dessert",
   price: "40",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis. ",
    },
  ],
  thali:[
    
  ]
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
   
  
    addTothali: (state, action) => {
   
      state.thali.push(action.payload);
    },
    RemoveItem:(state,action)=>{
       state.thali.splice(action.payload,1)
    },
  },
})

// Action creators are generated for each case reducer function
export const { addTothali ,RemoveItem } = counterSlice.actions;

export default counterSlice.reducer