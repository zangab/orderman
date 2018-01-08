import Vue from 'vue'

// Vue instance to emit events
// EventBus.$emit('EVENT_NAME', payLoad);
// EventBus.$on(‘EVENT_NAME’, function (payLoad) { ... });
const EventBus = new Vue()

export default EventBus
