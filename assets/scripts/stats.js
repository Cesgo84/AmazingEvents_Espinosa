let data = await fetch('../../back/amazing.json')
  .then(response => response.json())
  .then(data => {
  	return data;
})
  console.log(data);

