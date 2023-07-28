const fs = require('fs')
const DATA_PATH = './data.json'

const regTitle = '\\d+\\.\\s[\\u4e00-\\u9f5a0-9a-z\\s]+'
const regTagPre = 'dark:bg-dark-fill-3">'
const regTag = `${regTagPre}[\\u4e00-\\u9f5a()a-z]+`
const regDifficulty = '简单|中等|困难'
const regHtml = new RegExp(`(${regTitle})|(${regTag})|${regDifficulty}`, 'gi')
const regStringFilter = data => {
  return data
    .replace(/{/g, '\n  {')
    .replace(/{"/g, '{ "')
    .replace(/,"/g, ', "')
    .replace(/":/g, '": ')
    .replace(/:\[/g, ': [')
    .replace(/]}/g, '] }')
    .replace(/]$/, '\n]')
}

const difficultyEmu = {
  EASY: '简单',
  MEDIUM: '中等',
  HARD: '困难'
}

/**
 * true - 解析 html
 * false - 解析 query
 */
const MODAL = false

// 读取本地文件
function readLocal() {
  try {
    fs.accessSync(DATA_PATH, fs.constants.F_OK)
    console.log('exists')
    return fs.readFileSync(DATA_PATH, 'utf-8') || '[]'
  } catch (error) {
    console.log(`${DATA_PATH} does not exist`)
    fs.writeFileSync(DATA_PATH, '')
    return '[]'
  }
}

// 保存本地文件
function saveLocal(data) {
  const dataString = regStringFilter(JSON.stringify(data))
  // console.log('dataString', dataString)
  fs.writeFile(DATA_PATH, dataString, err => {
    if (err) {
      console.log('\x1B[31m%s\x1B[0m', '[ERROR]', '保存到本地文件失败', err)
    } else {
      console.log('\x1B[32m%s\x1B[0m', '[SUCCESS]', '保存到本地文件成功')
    }
  })
}

// 原始数据整理
function dataHandler(data) {
  const list = []
  let obj = {
    index: 0,
    name: '',
    difficulty: '',
    tag: []
  }
  data.forEach(e => {
    if (new RegExp(regTitle, 'i').test(e)) {
      const [index, name] = e.split('. ')
      obj.index = +index
      obj.name = name
    } else if (new RegExp(regTagPre).test(e)) {
      obj.tag.push(e.replace(regTagPre, ''))
    } else {
      obj.difficulty = e
      list.push(obj)
      obj = {
        index: 0,
        name: '',
        difficulty: '',
        tag: []
      }
    }
  })
  return list
}

// 数据去重、排序
function dataFilter(data) {
  const tmp = []
  data.forEach(e => {
    tmp[e.index - 1] = e
  })
  data.splice(
    0,
    data.length,
    ...tmp.filter(e => e)
  )
}

// html 解析
// const data = ``

// 解析 html
function getHTMLData() {
  const res = data.match(regHtml)
  if (!res) {
    console.log('no data')
  }
  return res
}

// query 解析
// post接口：https://leetcode.cn/graphql/
function getQueryData() {
  const req = {}
  return (
    req?.data?.problemsetQuestionList?.questions
      .map(({ difficulty, frontendQuestionId, titleCn, topicTags, paidOnly, titleSlug }) => {
        if (paidOnly) return
        return {
          index: +frontendQuestionId,
          name: titleCn,
          titleSlug,
          difficulty: difficultyEmu[difficulty],
          tag: topicTags.map(({ nameTranslated } = {}) => nameTranslated)
        }
      })
      .filter(e => e) || []
  )
}

;(function () {
  let list = []
  if (MODAL) {
    // 解析 html
    // const orgData = getHTMLData()
    if (!orgData) return
    // 处理原始数据
    list = dataHandler(orgData)
  } else {
    list = getQueryData()
  }
  // console.log('list', list)
  if (!list.length) return
  // 获取预存数据
  const localData = JSON.parse(readLocal())
  // console.log(localData)
  localData.push(...list)
  // console.log(localData)
  // 数据整理
  dataFilter(localData)
  // 数据写入
  saveLocal(localData)
})()
