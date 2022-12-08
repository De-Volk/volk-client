<script lang="ts">
  export let width = '';
  export let selectedOption = true;
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  {width}
  height="7"
  fill="none"
>
  <rect
    width="100%"
    height="7"
    rx="3.5"
    fill={selectedOption ? '#2E4558' : '#F5BA62'}
  />
</svg>
