<template>
    <h1>¿Quién es este Pokemon?</h1>
    <PokemonPicture :pokemonId="600" :showPokemon="true"/>

    <PokemonOptions :pokemons="pokemonArr"/>

  
</template>

<script>
    import PokemonPicture from '@/components/PokemonPicture.vue'
    import PokemonOptions from '@/components/PokemonOptions.vue'

    import getPokemonOptions from '../helpers/getPokemonOptions'

    // console.log(getPokemonOptions())

export default {

  components: { PokemonPicture, PokemonOptions },
  data() {
    return {
      pokemonArr:[]
    }
  },
  methods: {
    async mixPokemonArr() {
      this.pokemonArr = await getPokemonOptions()
    }
  },
  mounted() {
    this.mixPokemonArr()
  }

}
</script>

