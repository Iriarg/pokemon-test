<template>
  <PokemonLives :lives="lives"/>

  <h1 v-if="!pokemon">Espere por favor...</h1>

  <div v-else>
    <h1>¿Quién es este Pokemon?</h1>

    <PokemonPicture :pokemonId="pokemon.id" :showPokemon="showPokemon"/>
    <PokemonOptions :pokemons="pokemonArr" @selection="checkAnswer"/>
  </div>

  <template v-if="showAnswer">
    <h2 class="fade-in">{{message}}</h2>
    <button @click="newGame">Nuevo juego</button>  
  </template>


  
</template>

<script>
    import PokemonPicture from '@/components/PokemonPicture.vue'
    import PokemonOptions from '@/components/PokemonOptions.vue'

    import getPokemonOptions from '../helpers/getPokemonOptions'


export default {

  components: { PokemonPicture, PokemonOptions },
  data() {
    return {
      pokemonArr:[],
      pokemon: null,
      showPokemon: false,
      showAnswer: false,
      message: ''
    }
  },
  methods: {
    async mixPokemonArr() {
      this.pokemonArr = await getPokemonOptions()

      const rndInt = Math.floor(Math.random() * 4)
      this.pokemon = this.pokemonArr[rndInt]
    },

    checkAnswer( selectedId ) {
      this.showPokemon = true
      this.showAnswer = true

      if(selectedId === this.pokemon.id) {
        this.message = `¡Bien!, ¡${this.pokemon.name} es correcto!`
      } else {
        this.message = `Oops, era ${this.pokemon.name}`
      }
    },


    newGame () {
      this.showPokemon = false,
      this.showAnswer = false,
      this.pokemonArr = [],
      this.pokemon = null,
      this.mixPokemonArr()
    }

  },
  mounted() {
    this.mixPokemonArr()
  }

}
</script>

