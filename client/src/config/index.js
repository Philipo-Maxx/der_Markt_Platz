export const registerFormControls = [
  {
    name: "fullName",
    label: "Full Name",
    placeholder: "Enter your full name",
    componentType: "input",
    type: "text",
  },
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    componentType: "input",
    type: "password",
  },
  {
    name: "confirmPassword",
    label: "Confirm Password",
    placeholder: "Confirm your password",
    componentType: "input",
    type: "password",
  },
  {
    name: "dateOfBirth",
    label: "Enter Date of Birth",
    placeholder: "Date of Birth",
    componentType: "input",
    type: "date",
  },
  {
    name: "gender",
    label: "Select Gender",
    componentType: "select",
    options: [
      { id: "male", label: "Male" },
      { id: "female", label: "Female" },
    ],
  },
];

export const loginFormControls = [
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    componentType: "input",
    type: "password",
  },
];

export const addProductFormElements = [
  {
    label: "Title",
    name: "title",
    componentType: "input",
    type: "text",
    placeholder: "Enter product title",
  },
  {
    label: "Description",
    name: "description",
    componentType: "textarea",
    placeholder: "Enter product description",
  },
  {
    label: "Category",
    name: "category",
    componentType: "select",
    options: [
      { id: "watches", label: "Watches" },
      { id: "bracelets", label: "Bracelets" },
      { id: "anklet", label: "Anklets" },
      { id: "necklace", label: "Necklace" },
      { id: "footwear", label: "Footwear" },
      { id: "earring", label: "Earrings" },
      { id: "waistchain", label: "Waistchain" },
    ],
  },
  {
    label: "Brand",
    name: "brand",
    componentType: "select",
    options: [
      { id: "t_co", label: "Tiffany & Co." },
      { id: "h_w", label: "Harry Winston" },
      { id: "cartier", label: "Cartier" },
      { id: "v_c_a", label: "Van Cleef & Arpels" },
      { id: "graff", label: "Graff" },
      { id: "bvlgari", label: "Bvlgari" },
    ],
  },
  {
    label: "Price",
    name: "price",
    componentType: "input",
    type: "number",
    placeholder: "Enter product price",
  },
  {
    label: "Sale Price",
    name: "salePrice",
    componentType: "input",
    type: "number",
    placeholder: "Enter sale price (optional)",
  },
  {
    label: "Total Stock",
    name: "totalStock",
    componentType: "input",
    type: "number",
    placeholder: "Enter total stock",
  },
];
export const shoppingViewHeaderMenuItems = [
  {
    id: "home",
    label: "Home",
    path: "/shop/home",
  },
  {
    id: "products",
    label: "Products",
    path: "/shop/listing",
  },
  {
    id: "watches",
    label: "Watches",
    path: "/shop/listing",
  },
  {
    id: "bracelets",
    label: "Bracelets",
    path: "/shop/listing",
  },
  {
    id: "anklet",
    label: "Anklets",
    path: "/shop/listing",
  },
  {
    id: "footwear",
    label: "Footwear",
    path: "/shop/listing",
  },
  {
    id: "necklace",
    label: "Necklace",
    path: "/shop/listing",
  },
  {
    id: "earring",
    label: "Earrings",
    path: "/shop/listing",
  },
  {
    id: "waistchain",
    label: "Waistchain",
    path: "/shop/listing",
  },
  {
    id: "search",
    label: "Search",
    path: "/shop/search",
  },
];

export const filterOptions = {
  category: [
    { id: "watches", label: "Watches" },
    { id: "bracelets", label: "Bracelets" },
    { id: "anklet", label: "Anklets" },
    { id: "necklace", label: "Necklace" },
    { id: "footwear", label: "Footwear" },
    { id: "earring", label: "Earrings" },
    { id: "waistchain", label: "Waistchain" },
  ],
  brand: [
    { id: "t_co", label: "Tiffany & Co." },
    { id: "h_w", label: "Harry Winston" },
    { id: "cartier", label: "Cartier" },
    { id: "v_c_a", label: "Van Cleef & Arpels" },
    { id: "graff", label: "Graff" },
    { id: "bvlgari", label: "Bvlgari" },
  ],
};

export const sortOptions = [
  { id: "price-lowtohigh", label: "Price: Low to High" },
  { id: "price-hightolow", label: "Price: High to Low" },
  { id: "title-atoz", label: "Title: A to Z" },
  { id: "title-ztoa", label: "Title: Z to A" },
];

export const categoryOptionsMap = {
  watches: "Watches",
  bracelets: "Bracelets",
  anklet: "Anklets",
  accessories: "Necklace",
  footwear: "Footwear",
  earring: "Earrings",
  waistchain: "Waistchain",
};

export const brandOptionsMap = {
  t_co: "Taffany & Co.",
  h_w: "Harry Winston",
  cartier: "Cartier",
  v_c_a: "Van Cleef & Arpels",
  graff: "Graff",
  bvlgari: "Bvlgari",
};

export const addressFormControls = [
  {
    label: "Address",
    name: "address",
    componentType: "input",
    type: "text",
    placeholder: "Enter your address",
  },
  {
    label: "City",
    name: "city",
    componentType: "input",
    type: "text",
    placeholder: "Enter your city",
  },
  {
    label: "Pincode",
    name: "pincode",
    componentType: "input",
    type: "text",
    placeholder: "Enter your pincode",
  },
  {
    label: "Phone ",
    name: "phone",
    componentType: "input",
    type: "text",
    placeholder: "Enter your phone number",
  },
  {
    label: "Notes",
    name: "notes",
    componentType: "textarea",
    placeholder: "Enter any additional notes",
  },
];
