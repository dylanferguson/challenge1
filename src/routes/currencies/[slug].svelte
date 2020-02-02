<script context="module">
  import moment from "moment";

  export async function preload({ params, query }) {
    const res = await this.fetch(`currencies/${params.slug}.json`);
    const { quotes, date, ...data } = await res.json();
    const openingPrice = quotes[0].price;
    const currentPrice = quotes[quotes.length - 1].price;
    const priceChange = ((currentPrice - openingPrice) / openingPrice) * 100;
    const formattedDate = moment(date, "YYYYMMDD").format("DD/MM/YYYY");

    let maxProfit = 0;
    let buyQuote = quotes[0];
    let sellQuote = quotes[0];

    for (let i = 0; i < quotes.length; i++) {
      const initPrice = quotes[i].price;
      for (let j = i + 1; j < quotes.length - 1; j++) {
        const newPrice = quotes[j].price;
        const profit = ((newPrice - initPrice) / initPrice) * 100;

        if (profit > maxProfit) {
          maxProfit = profit;
          buyQuote = quotes[i];
          sellQuote = quotes[j];
        }
      }
    }

    if (res.status === 200) {
      return {
        currency: {
          ...data,
          formattedDate,
          quotes,
          openingPrice,
          currentPrice,
          priceChange,
          maxProfit,
          buyQuote,
          sellQuote
        }
      };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  import Icon from "../../components/Icon.svelte";
  import Table from "../../components/Table.svelte";

  export let currency;

  const timeFormatter = str => `${str.slice(0, 2)}:${str.slice(2)}`;
</script>

<style lang="scss">
  @import "../../styles/main";

  .header {
    display: flex;

    @include mobile {
      align-items: center;
    }
  }

  .info {
    display: flex;
    align-items: baseline;

    margin-left: 24px;

    @include tablet {
      flex-direction: column;
    }
  }

  h1 {
    font-size: $font-size-xxxlarge;
    line-height: 60px;
    margin-bottom: 0;
    margin-right: 36px;

    .ticker {
      font-size: $font-size-large;
      font-variant: small-caps;
      text-transform: lowercase;
      color: $color-gray-600;
    }

    @include tablet {
      font-size: $font-size-xlarge;
      line-height: $line-height-xsmall;

      .ticker {
        font-size: $font-size-normal;
      }
    }
  }

  .price-details {
    font-size: $font-size-xlarge;

    @include tablet {
      font-size: $font-size-large;
    }

    .current-price {
      color: $color-gray-700;

      .currency {
        font-variant: small-caps;
        text-transform: lowercase;
      }
    }
  }

  .negative {
    color: $color-danger-700;
  }

  .positive {
    color: $color-success-700;
  }

  .content {
    margin-left: 84px;

    @include mobile {
      margin-left: 0;
    }
  }

  .profit-details {
    font-size: $font-size-medium;
    font-variant: small-caps;
    text-transform: lowercase;

    span {
      color: $color-gray-700;
    }

    @include tablet {
      margin-top: 16px;
      font-size: $font-size-normal;
    }

    @include mobile {
      margin-left: 84px;
    }
  }
</style>

<svelte:head>
  <title>Coin | {currency.currency}</title>
  <meta name="Description" content="Digital Content Platform dev challenge">
</svelte:head>

<div class="content-row">
  <div class="header">
    <Icon name={currency.currency.toLowerCase()} size="60px" />
    <div class="info">
      <h1>
        {currency.currency}
        <span class="ticker">({currency.ticker})</span>
      </h1>
      <div class="price-details">
        <span class="current-price">
          ${currency.currentPrice}
          <span class="currency">AUD</span>
        </span>
        <span
          class="price-change"
          class:negative={currency.priceChange < 0}
          class:positive={currency.priceChange > 0}>
          ({currency.priceChange.toFixed(2)}%)
        </span>
      </div>
    </div>
  </div>
  <div class="content">
    <div class="profit-details">
      Maximum trade profit: {currency.maxProfit.toFixed(2)}%
      <span>
        (Buy: ${currency.buyQuote.price} at {timeFormatter(currency.buyQuote.time)}hrs,
        Sell: ${currency.sellQuote.price} at {timeFormatter(currency.sellQuote.time)}hrs)
      </span>
    </div>
    <div class="trading-history">
      <Table
        headers={['Date', 'Time', 'Price']}
        data={currency.quotes.map(quote => [
          currency.formattedDate,
          timeFormatter(quote.time),
          `\$${quote.price}`
        ])} />
    </div>
  </div>
</div>
