const http = require('http');

// Crear un servidor HTTP básico
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain; charset=utf-8'); // Especifica la codificación UTF-8
  res.end('“Este es el server de Rodrigo Deco del entorno de PRODUCCION del primer parcial”\n');
});

// Escuchar en el puerto 3000
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}/`);
});
