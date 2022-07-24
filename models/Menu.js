import mongoose from 'mongoose'

const menuSchema = mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
    submenu: [this],
  },
  {
    timestamps: true,
  }
)

const Menu = mongoose.model('Menu', menuSchema)

export default Menu
