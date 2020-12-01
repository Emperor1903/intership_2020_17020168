<template>
  <div>
    <table>
      <thead>
        <tr>
          <td>Họ và tên</td>
          <td>Ngày sinhsinh</td>
          <td>Chứng minh thư</td>
          <td>Điện thoại</td>
          <td>Địa chỉ</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for='person in persons.slice(perpage*(page-1),perpage*page)' :key='person.cardID'>
          <td>{{person.name}}</td>
          <td>{{person.birth}}</td>
          <td>{{person.cardID}}</td>
          <td>{{person.phone}}</td>
          <td>{{person.address}}</td>
        </tr>
      </tbody>
      <!-- <ul v-for=''></ul> -->
    </table>
    <div>
      <ul>
          <li>
              <button v-if="page > 1" @click="page--">Trang trước</button>
          </li>
          <li>
              <button v-if="page > 1">...</button>
          </li>
          <li>
            <button v-for="pagevalue in pages.slice(page-1,page+2)" :key="pagevalue" @click="page = pagevalue" >{{ pagevalue }}</button>
          </li>
          <li>
              <button v-if="page < Math.ceil(persons.length/perpage) -2">...</button>
          </li>
          <li>
              <button v-if="page < Math.ceil(persons.length/perpage)" @click="page++">Trang sau</button>
          </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'datatable',
  data () {
    return {
      persons: [
        {
          name: 'Lê Công Dũng',
          birth: '25 / 12 / 1999',
          cardID: '017521999',
          phone: '0969187445',
          address: 'Đan Phượng, Hà Nội'
        },
        {
          name: 'Trần Anh Bảo',
          birth: '27/08/1999',
          cardID: '187699800',
          phone: '0915474496',
          address: 'Ba Đình, Hà Nội'
        },
        {
          name: 'Nguyễn Thị Quỳnh Anh',
          birth: '30/09/1999',
          cardID: '037199000040',
          phone: '0372816467',
          address: 'Mai Dịch, Hà Nội'
        },
        {
          name: 'Hà Quang Hưng',
          birth: '27/08/1999',
          cardID: '122330871',
          phone: '374230927',
          address: 'Ngoại Giao Đoàn, Xuân Đỉnh'
        },
        {
          name: 'Nguyễn Văn Thắng Em',
          birth: '13/08/1999',
          cardID: '38099008641',
          phone: '0373051246',
          address: '1194 đường láng'
        },
        {
          name: 'Nguyễn Trọng Thưởng',
          birth: '19/03/1998',
          cardID: '30097002913',
          phone: '386721690',
          address: 'số nhà 21 ngõ 2 đường phạm văn đồng cầu giấy hà nội'
        },
        {
          name: 'Lương Văn Quân',
          birth: '25 / 12 / 1999',
          cardID: '017521999',
          phone: '096917837887445',
          address: 'Đan Phượng, Hà Nội'
        },
        {
          name: 'Nguyễn Bá Hiệp',
          birth: '25 / 12 / 1999',
          cardID: '0175278381999',
          phone: '78387378378',
          address: 'Đan Phượng, Hà Nội'
        },
        {
          name: 'Phạm Hùng Mạnh',
          birth: '25 / 12 / 1999',
          cardID: '4553753783',
          phone: '0969187445',
          address: 'Đan Phượng, Hà Nội'
        },
        {
          name: 'Lê Văn Hiếu',
          birth: '25 / 12 / 1999',
          cardID: '034099002863',
          phone: '0969187445',
          address: 'Đan Phượng, Hà Nội'
        },
        {
          name: 'Trần Văn Tuấn',
          birth: '25 / 12 / 1999',
          cardID: '163452367',
          phone: '0969187445',
          address: 'Đan Phượng, Hà Nội'
        },
        {
          name: 'Phạm Quyết Thắng',
          birth: '25 / 12 / 1999',
          cardID: '036099003552',
          phone: '0969187445',
          address: 'Đan Phượng, Hà Nội'
        }
      ],
      page: 1,
      perpage: 3,
      pages: []
    }
  },
  created () {
    console.log(this.persons.length / this.perpage)
    let numberOfPage = Math.ceil(this.persons.length / this.perpage)
    for (let i = 1; i <= numberOfPage; i++) {
      this.pages.push(i)
    }
    console.log(this.pages)
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
tr {
  border: 10px black;
}
td {
  width: auto;
  margin: 15px;
  border: 10px black;
  padding: 5px 15px;
}
table{
    height: 360px;
}
tr{
    height: 60px;
}
</style>
