const Crawler = require('crawler')

let crawler = new Crawler({
  callback: (error, res, done) => {
    if (error) {
      console.log('erro ao entrar')
    }
    let body = res.$('#html5video_base div a img').attr('src')
    console.log(body)
    done()
  }
})

crawler.queue([
  'https://www.xvideos.com/video45008187/um_casal_de_estrangeiros_em_sao_joao_de_loure_albergaria-a-velha',
  'https://www.xvideos.com/video44947905/morena_peituda_fudendo_por_dinheiro',
  'https://www.xvideos.com/video35273423/garoto_virgem_come_a_mulher_do_corno_enquanto_ele_filma',
  'https://www.xvideos.com/video35273543/garoto_virgem_come_a_mulher_do_corno_enquanto_ele_filma_-part_2'
])
