import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;

  mounted() {
    console.log(this.msg);
  }
}
