// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database()
const _ = db.command
// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()

  try {
    return await db.collection('shipping-address').where({
      _openid:wxContext.OPENID,
    }).update({
      data: {
        info: _.push({
          each: event.info
        })
      }
    })
  } catch(e) {
    console.error(e)
  }
}