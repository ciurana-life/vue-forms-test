<template>
  <div>
    <h1>Create an event</h1>
    <form @submit.prevent="sendForm">

      <BaseSelect
        :options="categories"
        v-model="event.category"
        label="Select a category"
      />

      <h3>Name & describe your event</h3>

      <BaseInput
        v-model="event.title"
        label="Title"
        type="text"
      />

      <BaseInput
        v-model="event.description"
        label="Description"
        type="text"
      />

      <h3>Where is your event?</h3>

      <BaseInput
        v-model="event.location"
        label="Location"
        type="text"
      />

      <h3>Are pets allowed?</h3>
      <BaseRadioGroup
        v-model="event.pets"
        name="pets"
        :options="petOptions"
        
      />

      <h3>Extras</h3>
      <BaseCheckbox
        label="Catering"
        v-model="event.extras.catering"
      />

      <BaseCheckbox
        label="Live music"
        v-model="event.extras.music"
      />
      {{event}}
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      categories: [
        'sustainability',
        'nature',
        'animal welfare',
        'housing',
        'education',
        'food',
        'community'
      ],
      event: {
        category: '',
        title: '',
        description: '',
        location: '',
        pets: 1,
        extras: {
          catering: false,
          music: false
        }
      },
      petOptions: [
        { label: 'Yes', value: 1},
        { label: 'No', value: 0}
      ]
    }
  },
  methods: {
    sendForm () {
      axios.post(
        'http://localhost:5001/events',
        this.event
      )
      .then((response) => { console.log('Response', response) })
      .catch((err) => { console.log('Err', err) })
    }
  }
}
</script>