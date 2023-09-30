export  const navigation = {
  categories: [
    {
      id: 'birthday',
      name: 'BIRTHDAY',
      featured: [
        
      ],
      sections: [
        {
          id: 'giftsbychoice',
          name: 'GIFTS BY CHOICE',
          items: [
            { name: 'Cakes', id:"cake", href: `birthday/cake` },
            { name: 'Flower', id:"flower", href: '#' },
            { name: 'PLant', id: 'plant' },
          ],
        },
        {
          id: 'giftsbyprice',
          name: 'GIFT BY PRICE',
          items: [
            { name: 'Gifts Rs100-Rs500', id: 'gift100' },
            { name: 'Gifts Rs501-Rs1000', id: 'gift500' },
            { name: 'Gifts Rs1001-Rs1500', id: 'gift1000' },
            { name: 'Gifts above 1500Rs', id: 'gift1500' }
          ],
        },
      ],
    },
    {
      id: 'cake',
      name: 'CAKE',
      featured: [
        
      ],
      sections: [
        {
          id: 'flavour',
          name: 'FLAVOUR',
          items: [
            { name: 'Chocolate', id: 'chocolate' },
            { name: 'Truffle', id: 'truffle' },
            { name: 'Butterscotch', id: 'butterscotch' },
            { name: 'Red Velvet', id: 'redvelvet' },
            { name: 'Mixfruit', id: 'mixfruit' },
            { name: 'Blackforest', id: 'blackforest' },
            { name: 'Others', id: 'others' },
            
          ],
        },
        {
          id: 'shape',
          name: 'SHAPE',
          items: [
            { name: 'Round', id: 'round' },
            { name: 'Heart', id: 'heart' },
            { name: 'Square', id: 'square' },
            { name: 'Others', id: 'others' },
          ],
        },
        {
          id: 'byprice',
          name: 'CAKE BY PRICE',
          items: [
            { name: 'cake Rs100-Rs500', id: 'caket100' },
            { name: 'cake Rs501-Rs1000', id: 'cake500' },
            { name: 'cake Rs1001-Rs1500', id: 'cake1000' },
            { name: 'cake above 1500Rs', id: 'cake1500' }
          ],
        },
      ],
    },
    {
      id: 'flower',
      name: 'FLOWER',
      featured: [
      ],
      sections: [
        {
          id: 'type',
          name: 'BY TYPE',
          items: [
            { name: 'Roses', id: 'roses' },
            { name: 'Carnations', id: 'carnations' },
            { name: 'Lilies', id: 'lilies' },
            { name: 'Orchids', id: 'orchids' },
            { name: 'Mixed Flowers', id: 'mixflowers' },
            { name: 'Daisy', id: 'daisy' },
            { name: 'Others', id: 'others' },
            
          ],
        },
        {
          id: 'arrangement',
          name: 'ARRANGEMENT',
          items: [
            { name: 'Bouquet', id: 'bouquet' },
            { name: 'Box', id: 'box' },
            { name: 'Basket', id: 'basket' },
            { name: 'Unique', id: 'unique' },
            { name: 'Bunch', id: 'bunch' }
          ],
        },
        {
          id: 'color',
          name: 'COLOR',
          items: [
            { name: 'Red', id: 'red' },
            { name: 'Yellow', id: 'yellow' },
            { name: 'Pink', id: 'pink' },
            { name: 'White', id: 'white' },
            { name: 'Blue', id: 'blue' },
            { name: 'Others', id: 'other' }
          ],
        },
      ],
    },
    {
      id: 'plant',
      name: 'PLANT',
      featured: [
      ],
      sections: [
        {
          id: 'type',
          name: 'BY TYPE',
          items: [
            { name: 'Money', id: 'money' },
            { name: 'Flowering', id: 'flowering' },
            { name: 'Luck Bamboo', id: 'luckbamboo' },
            { name: 'Jade', id: 'jade' },
            { name: 'Syngonium', id: 'synogonium' },
            { name: 'Bonsai', id: 'bonsai' },
            { name: 'Others', id: 'others' },
            
          ],
        },
        {
          id: 'pot_material',
          name: 'POT MATERIAL',
          items: [
            { name: 'Plastic', id: 'plastic' },
            { name: 'Ceramic', id: 'ceramic' },
            { name: 'Glass', id: 'glass' },
            { name: 'Resin', id: 'resin' },
            { name: 'others', id: 'others' }
          ],
        },
        {
          id: 'indoor_outdoor',
          name: 'INDOOR/OUTDOOR',
          items: [
            { name: 'Outdoor Plants', id: 'outdoor' },
            { name: 'Indoor Plants', id: 'indoor' },
          ],
        },
      ],
    },
  ],
  pages: [
    
  ],
}