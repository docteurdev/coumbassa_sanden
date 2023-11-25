<template>
  <div>
    <nuxt-layout :name="'admin'">
      <div class="row justify-center">
        <div class="col-12 q-mt-md">
          <q-btn label="Ajouter" class="q-mb-lg" size="sm" icon="add" color="secondary" v-on:click="bientypesModal = true" />
          <br><br>
          <q-table title="bientypess" :rows="bientypess" :columns="columns" :filter="filter"
                   :pagination="pagination" row-key="name" flat>
            <template v-slot:top="props">
              <div class="col-7 q-table__title">Liste des bientypes</div>
              <q-input dense debounce="300" v-model="filter" placeholder="Rechercher" />
            </template>
            <template v-slot:body="props">
              <q-tr :props="props">
                <q-td key='libelle' :props='props'> {{props.row.libelle}} </q-td>
                <q-td key='createdAt' :props='props'> {{props.row.createdAt}} </q-td>
                <q-td key='updated_at' :props='props'> {{props.row.updated_at}} </q-td>
                <q-td key='published_at' :props='props'> {{props.row.published_at}} </q-td>
                <q-td key='created_by_id' :props='props'> {{props.row.created_by_id}} </q-td>
                <q-td key='updated_by_id' :props='props'> {{props.row.updated_by_id}} </q-td>

                <q-td key="actions" :props="props">
                  <q-btn class="q-mr-xs" size="xs" color="primary" v-on:click="update_get(props.row)" icon="edit"></q-btn>
                  <q-btn class="q-mr-xs" size="xs" color="red" v-on:click="bientypes_delete(props.row.id)" icon="delete"></q-btn>
                </q-td>
              </q-tr>
            </template>
          </q-table>
        </div>
      </div>
      <q-dialog v-model="bientypesModal">
        <q-card style="width: 700px; max-width: 90vw; padding: 10px">
          <q-card-section>
            <div class="text-h6">Ajouter un Bientypes</div>
          </q-card-section>
          <q-card-section>
            <q-form  @submit="onSubmit">
              <div class="row">
                <div class="col-12">
                  <q-input outlined dense v-model='bientypes.libelle' label='libelle' />
                </div>
              </div>
              <div class="row">
                <div class="col-12">
                  <q-btn color="primary" label="Valider" type="submit" />
                </div>
              </div>
            </q-form>
          </q-card-section>
          <q-card-actions align="right" class="bg-white text-teal">
            <q-btn flat label="Fermer" v-close-popup />
          </q-card-actions>
        </q-card>
      </q-dialog>
    </nuxt-layout>

  </div>
</template>

<script>
import {BientypesApi} from '/services/api/BientypesApi'
export default {
  layout: 'admin',
  data () {
    return {
      bientypesId: 1,
      bientypes: {},
      bientypess: [],
      bientypesModal: false,
      columns: [
        { name: 'id', align: 'left', label: 'id', field: 'id', sortable: true },
        { name: 'libelle', align: 'left', label: 'libelle', field: 'libelle', sortable: true },
        { name: 'createdAt', align: 'left', label: 'createdAt', field: 'createdAt', sortable: true },
        { name: 'updated_at', align: 'left', label: 'updated_at', field: 'updated_at', sortable: true },
        { name: 'published_at', align: 'left', label: 'published_at', field: 'published_at', sortable: true },
        { name: 'created_by_id', align: 'left', label: 'created_by_id', field: 'created_by_id', sortable: true },
        { name: 'updated_by_id', align: 'left', label: 'updated_by_id', field: 'updated_by_id', sortable: true },
        { name: 'actions', align: 'left', label: 'Actions' }
      ],
      filter: '',
      pagination: { sortBy: 'name', descending: false, page: 1, rowsPerPage: 10 }
    }
  },
  created () {
    this.bientypes_get()
  },
  methods: {
    update_get (props) {
      this.bientypes = props
      this.bientypesModal = true
    },
    async bientypes_get () {
      const res = await BientypesApi.get()
      this.bientypess = res['data'];
      console.log(this.bientypess)
    },
    onSubmit () {
      if (this.bientypes.id) {
        this.bientypes_update(this.bientypes.id)
      } else {
        this.bientypes_post()
      }
    },
    async bientypes_post () {
      console.log("post")
      await BientypesApi.postApi({data: this.bientypes}, true, true)
      await BientypesApi.get()
    },
    async bientypes_update (_id) {
      console.log("put")
      await BientypesApi.putApi(_id, {data: this.bientypes}, true, true)
      await BientypesApi.get()
    },
    async bientypes_delete (_id) {
      console.log("delete")
      await BientypesApi.deleteApi(_id, true, true)
      await BientypesApi.get()
    }
  }
}
</script>
