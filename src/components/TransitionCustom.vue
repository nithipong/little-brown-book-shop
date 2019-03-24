<template>
  <transition :css="false"
    @enter="enterHook"
    @after-enter="afterEnterHook"
    @leave="leaveHook"
    @after-leave="afterLeaveHook"
    @before-appear="beforeAppearHook"
    @appear="appearHook"
    @after-appear="afterAppearHook"
    :effect="effect"
    :mode="mode"
    :duration="duration">
    <slot></slot>
  </transition>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      default: "out-in"
    },
    duration: {
      type: Number,
      default: 400
    },
    effect: {
      type: Object,
      default: function() {
        return {
          enter: "transition.slideUpIn",
          leave: "transition.slideDownOut"
        };
      }
    },
    display: {
      type: String,
      defaul: "block"
    }
  },

  methods: {
    afterAppearHook() {
      this.$emit("after-appear");
    },

    beforeAppearHook() {},

    appearHook(el, done) {
      var self = this;
      self.$velocity($(el), self.effect.enter, {
        duration: self.duration,
        complete: done,
        display: self.display
      });
    },

    enterHook(el, done) {
      var self = this;
      self.$velocity($(el), self.effect.enter, {
        duration: self.duration,
        complete: done,
        display: self.display
      });
    },

    afterEnterHook() {
      this.$emit("after-enter");
    },

    leaveHook(el, done) {
      var self = this;
      self.$velocity($(el), self.effect.leave, {
        duration: self.duration,
        complete: done,
        display: self.display
      });
    },

    afterLeaveHook() {
      this.$emit("after-leave");
    }
  }
};
</script>
