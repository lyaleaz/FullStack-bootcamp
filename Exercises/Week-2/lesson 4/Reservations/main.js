 
     const reservations = {
            Bob: { claimed: false },
            Ted: { claimed: true }
        };
  function checkReservation() {
            const enteredName = document.getElementById('name').value.toLowerCase();
            const result = reservations[enteredName];

            if (result) {
                if (result.claimed) {
                    alert('Hmm, someone already claimed this reservation');
                } else {
                    alert(`Welcome, ${enteredName}`);
                }
            } else {
                alert('You have no reservation');
                reservations[enteredName] = { claimed: false };
            }
        }