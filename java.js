        function afficherHeure() {
            const maintenant = new Date();
            const heureJapon = new Date(maintenant.toLocaleString('en-US', { timeZone: 'Asia/Tokyo' }));
            
            const heures = String(heureJapon.getHours()).padStart(2, '0');
            const minutes = String(heureJapon.getMinutes()).padStart(2, '0');
            const secondes = String(heureJapon.getSeconds()).padStart(2, '0');
            
            document.getElementById('heure').textContent = `${heures}:${minutes}:${secondes}`;
        }
        
        afficherHeure();
        setInterval(afficherHeure, 1000);