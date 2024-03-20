function Home() {
  return (
    <div class="card">
      <p>
        <strong>Love you ❤️</strong>
      </p>
      <p>to the</p>
      <p>
        <strong>Moon </strong>🌝
      </p>
      <p>and to</p>
      <p>
        <strong>Saturn </strong>🪐
      </p>

      <style global jsx>{`
        :root {
          font-size: 20px;
        }

        *,
        *:before,
        *:after {
          box-sizing: border-box;
        }

        p {
          margin: 0;
        }

        p:not(:last-child) {
          margin-bottom: 0.5em;
        }

        p:last-child {
          margin-bottom: 1.5em;
        }

        body {
          font:
            1.5rem Inter,
            sans-serif;

          display: flex;
          align-items: center;
          justify-content: center;

          min-height: 100vh;
          padding: 30px;
          margin: 0;

          color: #224;
          background: url(https://source.unsplash.com/E8Ufcyxz514/2400x1823)
            center / cover no-repeat fixed;
        }

        .card {
          max-width: 300px;
          min-height: 200px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;

          max-width: 500px;
          height: 300px;
          padding: 35px;

          border: 1px solid rgba(255, 255, 255, 0.25);
          border-radius: 20px;
          background-color: rgba(255, 255, 255, 0.45);
          box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.25);

          backdrop-filter: blur(15px);
        }
      `}</style>
    </div>
  );
}

export default Home;
