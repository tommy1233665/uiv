'use strict'

import Carousel from './carousel/Carousel.vue'
import Slide from './carousel/Slide.vue'
import Collapse from './collapse/Collapse.vue'
import Dropdown from './dropdown/Dropdown.vue'
import Modal from './modal/Modal.vue'
import Tab from './tabs/Tab.vue'
import Tabs from './tabs/Tabs.vue'
import DatePicker from './datepicker/DatePicker.vue'
import Alert from './alert/Alert.vue'
import Pagination from './pagination/Pagination.vue'
import tooltip from './tooltip/tooltip'

let directives = {
  install (Vue) {
    tooltip(Vue)
  }
}

export {
  directives,
  Carousel,
  Slide,
  Collapse,
  Dropdown,
  Modal,
  Tab,
  Tabs,
  DatePicker,
  Alert,
  Pagination
}
