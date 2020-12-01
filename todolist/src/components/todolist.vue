<template>
  <div>
    <div class='add-item'>
      <input id='value-item' v-model='new_item' />
      <button id='add-button' @click='addTodo'>Thêm</button>
    </div>
    <div class='list-item'>
      <div class='list' id='undone-list'>
        <div>Công việc chưa hoàn thành</div>
        <ul>
          <li v-for='undone_item in undone_lists' :key='undone_item.name'>
            <input type='checkbox' @click='move_item_to_donelist(undone_item.id)' />
            <label>{{ undone_item.name }}</label>
          </li>
        </ul>
      </div>
      <div class='list' id='done-list'>
        <div>Công việc đã hoàn thành</div>
        <ul>
          <li v-for='done_item in done_lists' :key='done_item.name'>
            <input type='checkbox' checked='checked' @click='move_item_to_undonelist(done_item.id)' />
            <label>{{ done_item.name }}</label>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'todolist',
  data () {
    return {
      undone_lists: [
        { id: 1, name: 'ăn sáng' },
        { id: 2, name: 'ăn trưa' },
        { id: 3, name: 'ăn tối' }
      ],
      done_lists: [
        { id: 4, name: 'thức dậy' },
        { id: 5, name: 'đi chơi' },
        { id: 6, name: 'chơi game' }
      ],
      new_item: null
    }
  },
  methods: {
    addTodo () {
      console.log(this.new_item)
      if (this.new_item !== '' && this.new_item !== null) {
        this.undone_lists.push({ name: this.new_item, id: Date.now() })
        this.new_item = ''
      }
    },
    move_item_to_donelist (idItem) {
      for (var i = 0; i < this.undone_lists.length; i++) {
        if (this.undone_lists[i].id === idItem) {
          var a = this.undone_lists.splice(i, 1)
          console.log(a)
          this.done_lists.push(a[0])
        }
      }
    },
    move_item_to_undonelist (idItem) {
      for (var i = 0; i < this.done_lists.length; i++) {
        if (this.done_lists[i].id === idItem) {
          var a = this.done_lists.splice(i, 1)
          console.log(a)
          this.undone_lists.push(a[0])
        }
      }
    }
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
.list-item{
  display: flex;
  margin: auto;
}
.list {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
 .list ul{
  margin-left: 0px;
  padding-left: 0px;
}
.list ul li {
  display: block;
  margin-left: 0px;
  text-align: left;
}
.list ul li label{
  width: 300px;
}
</style>
