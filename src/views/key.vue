<template>
  <div class="app-container">
    <el-button type="primary" @click="handleAddKey">New Key</el-button>

    <el-table :data="keysList" style="width: 100%;margin-top:30px;" border>
      <el-table-column align="center" label="No" width="220">
        <template slot-scope="scope">
          {{ scope.$index + 1 }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="API_KEY" width="220">
        <template slot-scope="scope">
          {{ scope.row.api_key }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="Remark">
        <template slot-scope="scope">
          {{ scope.row.remark }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="Operations">
        <template slot-scope="scope">
          <el-button type="primary" size="small" @click="handleEdit(scope)">Edit</el-button>
          <el-button type="danger" size="small" @click="handleDelete(scope)">Delete</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog :visible.sync="dialogVisible" :title="dialogType === 'edit'?'Edit Key':'New Key'">
      <el-form :model="role" label-width="80px" label-position="left">
        <el-form-item label="Remark">
          <el-input v-model="role.remark" placeholder="abc@gmail.com" />
        </el-form-item>
        <el-form-item label="API_KEY">
          <el-input v-model="role.api_key" placeholder="API_KEY" />
        </el-form-item>
      </el-form>
      <div style="text-align:right;">
        <el-button type="danger" @click="dialogVisible=false">Cancel</el-button>
        <el-button type="primary" @click="confirmRole">Confirm</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
// import { getKeys, addKey, deleteKey, updateKey } from '@/api/key'
import { addKey, deleteKey, updateKey } from '@/api/key'

const defaultRole = {
  id: 0,
  api_key: '',
  remark: ''
}

export default {
  name: 'KEY',
  data() {
    return {
      role: Object.assign({}, defaultRole),
      keysList: [
        {
          api_key: '34j6o3josjwetwtew',
          id: 1,
          remark: 'awe@gmail.com'
        },
        {
          api_key: '34j6o3josjwetwtew',
          id: 3,
          remark: 'awe@gmail.com'
        },
        {
          api_key: '34j6o3josjwetwtew',
          id: 11,
          remark: 'awe@gmail.com'
        }
      ],
      dialogVisible: false,
      dialogType: ' ',
      checkStrictly: false,
      defaultProps: {
        children: 'children',
        label: 'title'
      }
    }
  },
  created() {
    // Mock: get all keys list from server
    this.getKeys()
  },
  methods: {
    // async getKeys() {
    //   // const res = await getKeys()
    //   // this.keysList = res.data
    // },
    handleAddKey() {
      this.role = Object.assign({}, defaultRole)
      this.dialogType = 'new'
      this.dialogVisible = true
    },
    handleEdit(scope) {
      this.dialogType = 'edit'
      this.dialogVisible = true
      this.role = scope.row
    },
    handleDelete({ $index, row }) {
      this.$confirm('Confirm to remove the Api key?', 'Warning', {
        confirmButtonText: 'Confirm',
        cancelButtonText: 'Cancel',
        type: 'warning'
      })
        .then(async() => {
          await deleteKey(row.id)
          this.keysList.splice($index, 1)
          this.$message({
            type: 'success',
            message: 'Delete succeed!'
          })
        })
        .catch(err => { console.error(err) })
    },
    async confirmRole() {
      const isEdit = this.dialogType === 'edit'

      if (isEdit) {
        await updateKey(this.role.id, this.role)
        for (let index = 0; index < this.keysList.length; index++) {
          if (this.keysList[index].id === this.role.id) {
            this.keysList.splice(index, 1, Object.assign({}, this.role))
            break
          }
        }
      } else {
        const { data } = await addKey(this.role)
        this.role.id = data.id
        this.keysList.push(this.role)
      }

      const { id, api_key, remark } = this.role
      this.dialogVisible = false
      this.$notify({
        title: 'Success',
        dangerouslyUseHTMLString: true,
        message: `
            <div>ID: ${id}</div>
            <div>API_Key: ${api_key}</div>
            <div>Remark: ${remark}</div>
          `,
        type: 'success'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.app-container {
  .roles-table {
    margin-top: 30px;
  }
  .permission-tree {
    margin-bottom: 30px;
  }
}
</style>
