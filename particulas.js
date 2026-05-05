document.addEventListener('DOMContentLoaded', function() {
            const particlesContainer = document.getElementById('particles');
           
            
           
            // Criar partículas de fundo
            function createParticles() {
                for (let i = 0; i < 20; i++) {
                    const particle = document.createElement('div');
                    particle.classList.add('particle');
                   
                    // Posição e tamanho aleatórios
                    const size = Math.random() * 10 + 2;
                    const posX = Math.random() * 100;
                    const posY = Math.random() * 100;
                    const delay = Math.random() * 5;
                   
                    particle.style.width = `${size}px`;
                    particle.style.height = `${size}px`;
                    particle.style.left = `${posX}%`;
                    particle.style.top = `${posY}%`;
                    particle.style.opacity = Math.random() * 0.5 + 0.1;
                    particle.style.animationDelay = `${delay}s`;
                   
                    particlesContainer.appendChild(particle);
                }
            }
           
            
            // Inicializar partículas
      
       
            createParticles();
    });