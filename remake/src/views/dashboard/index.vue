<template>
  <div>
    <el-row>
      <el-divider style="margin-bottom:30px"></el-divider>
      <el-button @click="start();dialog1 = true" type="primary" size="small"
                 style="width:20%;margin-bottom:30px;margin-left: 40%;">开始重生
      </el-button>
    </el-row>
    <el-row>
      <el-button @click="record();dialog2 = true" type="primary" size="small" style="width:20%;margin-bottom:30px;margin-left: 40%;">
        查看记录
      </el-button>
    </el-row>
    <el-dialog
      title="人生重开"
      :visible.sync="dialog1"
      width="30%"
      :before-close="handleClose">
      <span>{{ "国家：" + region }}</span>
      <span>{{ " 重生次数：" + remaketimes }}</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialog1 = false">取 消</el-button>
        <el-button type="primary" @click="dialog1 = false">确 定</el-button>
      </span>
    </el-dialog>
    <el-dialog
      title="人生重开"
      :visible.sync="dialog2"
      width="30%"
      :before-close="handleClose">
      <el-table
        :data="list"
        style="width: 100%">
        <el-table-column
          prop="country"
          label="国家"
          width="120">
        </el-table-column>
        <el-table-column
          prop="countAndPercent.count"
          label="次数"
          width="120">
        </el-table-column>
        <el-table-column
          prop="countAndPercent.percent"
          label="占比"
          width="120">
        </el-table-column>
      </el-table>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialog2 = false">取 消</el-button>
        <el-button type="primary" @click="dialog2 = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { record, remake, start } from "@/api/table";

export default {
  data() {
    return {
      token: null,
      region: null,
      remaketimes: null,
      dialog1: false,
      dialog2: false,
      list: null
    }
  },
  created() {
    this.fetchToken()
  },
  methods: {
    start() {
      start({ token: this.token }).then(response => {
        this.region = response.data.result
        this.remaketimes = response.data.total
      })
    },
    record() {
      record({ token: this.token }).then(response => {
        this.list = response.data
      })
    },
    fetchToken() {
      remake().then(response => {
        this.token = response.data.token
      })
    },
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => {
        })
    }
  }
}
</script>

