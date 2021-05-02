const Buah = require ('../model/Buah')
const objectid = require('mongoose').Types.ObjectId

exports.create = (data) =>
new Promise((resolve, reject) =>{
    Buah.create(data)
    .then(() => resolve ({
        status : true,
        pesan: 'berhasil input pembelian'
    })).catch (() => reject({
        status : false,
        pesan: 'gagal input pembelian'
    }))

})

exports.update = (id, data)=>
  new Promise((resolve, reject)=>{
    lampuModel.updateOne({
      _id: objectid(id)
    }, data).then (() => resolve({
        status : true,
        pesan : 'berhasil menampilkan data',
      })).catch(()=> reject ({
      status : false,
      pesan : 'gagal menampilkan data',
    }))
  })

  exports.showAllData = () =>
    new Promise((resolve, reject)=>{
    Buah.find()
      .then (result =>{
        resolve({
          status : true,
          pesan : 'berhasil menampilkan data',
          data : result
        })
      }).catch(()=> reject ({
        status : false,
        pesan : 'gagal menampilkan data',
        data : []
      }))
    })  

exports.showbyID = (id) =>
    new Promise((resolve, reject) => {
    Buah.findOne({
        _id: objectid(id)
      })
      .then (result =>{
        resolve({
          status : true,
          pesan : 'berhasil menampilkan data',
          data : result
        })
      })
      .catch(()=> reject ({
        status : false,
        pesan : 'gagal menampilkan data',
        data : null
      }))
    })

exports.delete = (id) =>
    new Promise((resolve, reject)=>{
      Buah.deleteOne({
        _id: objectid(id)
      }).then (() => resolve({
        status : true,
        pesan : 'berhasil menampilkan data',
        })).catch(()=> reject ({
        status : false,
        pesan : 'gagal menampilkan data',
        }))
    })