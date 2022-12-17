<script>
  import { createEventDispatcher, onMount } from 'svelte';
  import dayjs from 'dayjs';
  import 'dayjs/locale/ko';

  import ArrowLeft from './icons/ArrowLeft.svelte';

  export let currentDate;
  export let customClass = '';

  // data
  const dispatch = createEventDispatcher();
  let elModal; // HTMLElement
  let inputTxt; // string, défault date = now
  let isOpenCalendar = false; // true: show calendar
  const arrDays = ['일', '월', '화', '수', '목', '금', '토'];
  $: currentDay = +currentDate.format('D'); // 1..31
  $: currentMonth = +currentDate.format('M'); // 1..12
  $: currentYear = +currentDate.format('YYYY'); // 2021...
  $: selectedMonth = +currentDate.format('M'); // 1..12
  $: selectedYear = +currentDate.format('YYYY'); // 2021...
  let rows = initRows();
  $: currentDateString = dayjs(selectedYear + '-' + selectedMonth).format('YYYY년 MM월');

  // props

  // reactivity, on inputTxt changes
  $: dispatch('datepicked', {
    datepicked: inputTxt,
  });

  // life cycle
  onMount(() => {
    dayjs.locale('ko'); // use locale
    inputTxt = currentDate.format('YYYY-MM-DD'); // current day month year in input
    affecteRows();
  });

  // functions
  /**
   * Click outside of the modal will close it
   * @param e
   */
  function handleClickModal(e) {
    if (e.target === elModal) {
      isOpenCalendar = false;
    }
  }

  function initRows() {
    return [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
    ];
  }

  function affecteRows() {
    rows = initRows();
    const firstDayOfCurrentMonth = ucFirst(
      dayjs(selectedYear + '-' + selectedMonth)
        .startOf('month')
        .format('dd'),
    ); //
    const lastDayOfCurrentMonth = +dayjs(selectedYear + '-' + selectedMonth)
      .endOf('month')
      .format('D'); // 31
    let iRow = 0;
    let iCol = 0;
    let start = false;
    let cpt = 0;
    for (iRow = 0; iRow < 6; iRow++) {
      arrDays.forEach((daystr) => {
        if (cpt > lastDayOfCurrentMonth) {
          return;
        }
        if (!start && daystr === firstDayOfCurrentMonth) {
          cpt++;
          start = true;
        }
        rows[iRow][iCol] = cpt;
        iCol++;
        if (start) {
          cpt++;
        }
      });
      iCol = 0;
    }
  }

  function ucFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  function previousMonth() {
    selectedMonth--;
    if (selectedMonth <= 0) {
      selectedMonth = 12;
      selectedYear--;
    }
    affecteRows();
  }

  function nextMonth() {
    selectedMonth++;
    if (selectedMonth > 12) {
      selectedMonth = 1;
      selectedYear++;
    }
    affecteRows();
  }

  function selectDate(y, m, d) {
    const currentDate = dayjs(dayjs().format('YYYY MM DD'));
    const _selectedDate = dayjs(y + '-' + m + '-' + d);

    const isAfter = currentDate.isSame(_selectedDate) || currentDate.isBefore(_selectedDate);
    if (!isAfter) {
      alert('이전 날짜는 선택할 수 없습니다.');
      return;
    }
    inputTxt = _selectedDate.format('YYYY-MM-DD');
    isOpenCalendar = false;
  }
</script>

{#if isOpenCalendar}
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div
    class="calendar-bg"
    bind:this={elModal}
    on:click={handleClickModal}
  >
    <div class="modal-item">
      <div class="calendar-container">
        <div class="calendar">
          <div class="header">
            <!-- Month year -->
            <span class="current-date">{ucFirst(currentDateString)}</span>
            <div class="btn-wrapper">
              <!-- bnt previous -->
              <button
                on:click={previousMonth}
                aria-label="calendar backward"
                class="header-btn"
                style=""
              >
                <ArrowLeft />
              </button>
              <!-- bnt next -->
              <button
                on:click={nextMonth}
                aria-label="calendar forward"
                class="header-btn"
              >
                <ArrowLeft />
              </button>
            </div>
          </div>
          <div class="date-wrapper">
            <table style="width: 100%;">
              <thead>
                <tr>
                  {#each arrDays as day}
                    <th>
                      <div style="width:100%; display:flex; justify-content: center">
                        <p style="color:#444; font-weight:500; text-align:center">
                          {day}
                        </p>
                      </div>
                    </th>
                  {/each}
                </tr>
              </thead>
              <tbody>
                {#each rows as col}
                  <tr>
                    {#each col as i}
                      <td style="padding-top:0.5rem">
                        <div
                          style="width: calc(100% - 0.5rem); display:flex; justify-content:center; padding: 0.25rem"
                        >
                          {#if i > 0}
                            {#if i === currentDay && selectedMonth === currentMonth && selectedYear === currentYear}
                              <button
                                on:click={() => {
                                  selectDate(selectedYear, selectedMonth, i);
                                }}
                                style="
                                    display:flex;
                                    align-items: center;
                                    justify-content: center;
                                    font-weight: 500;
                                    color: white;
                                    background-color: #555;
                                    border:none;
                                    border-radius: 10px;
                                    width: 2rem;
                                    height: 2rem;
                                  ">{i}</button
                              >
                            {:else}
                              <p class="text-base text-gray-500 font-medium">
                                <button
                                  class="border-none"
                                  on:click={() => {
                                    selectDate(selectedYear, selectedMonth, i);
                                  }}
                                  style="
                                        display:flex;
                                        align-items:center;
                                        justify-content:center;
                                        font-weight: 500;
                                        color: #444;
                                        background-color: white;
                                        outline:none;
                                        border:none;
                                        border-radius: 16px;
                                        width: 2rem;
                                        height: 2rem;
                                    "
                                >
                                  {i}
                                </button>
                              </p>
                            {/if}
                          {/if}
                        </div>
                      </td>
                    {/each}
                  </tr>
                {/each}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
{/if}

<input
  type="text"
  bind:value={inputTxt}
  class={customClass}
  on:click={() => {
    isOpenCalendar = true;
  }}
/>

<style>
  .calendar-bg {
    position: fixed;
    z-index: 1000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background: #22222240;
  }
  .modal-item {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem 0.5rem;
    width: calc(100% - 1rem);
    height: calc(100% - 2rem);
  }
  .calendar-container {
    border-radius: 10px;
    min-width: 2rem;
    width: 100%;
    box-shadow: 0 0 6px 8px #22222240;
  }
  .calendar-container .calendar {
    padding: 0.5rem;
    background-color: white;
    border-radius: 10px;
  }
  .calendar-container .calendar .header {
    padding: 0 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .calendar .date-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 1.6rem;
    overflow-x: auto;
  }

  .calendar .header .btn-wrapper {
    display: flex;
    align-items: center;
    padding: 10px 0;
  }
  .calendar .header .header-btn {
    color: #444;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .calendar .header .header-btn:nth-of-type(2) {
    transform: rotate(180deg);
    margin-left: 1rem;
  }
  .calendar .header .current-date {
    font-weight: 600;
    color: #222;
  }
</style>
