const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

marvel_heros.push(dc_heros)
//[ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ] , here marvel_heros treats dc_heros as another data so complete array is pushed instead of its element.
