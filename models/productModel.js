const mongoose = require("mongoose");

const ProductcampSchema = mongoose.Schema({
    nameProduct:{
        type: String,
        required: [true,
             "el nombre del producto es requerido"],
        maxlength: [100, "nombre de bootcamp no mayor a 100 caracteres"]
    },
    cost:{
        type: Number,
        required:[true, "El costo del productoes requerido"],
        maxlength: [10, "telefono de bootcamp no mayor a 10 digitos"]
    },
    description:{
        type:String,
        required: [true,
            "la descripción es requerida"],
        maxlength:[100, "descripcion del producto no mayor a 100 caracteres "]
    },
    cantidad:{
        type:Number,
        required:[true, "La cantidad del producto es requerida"],
        maxlength:[50, "Cantidad de productos no mayor a 50"]
    }
})

module.exports = mongoose.model('Product', ProductcampSchema)