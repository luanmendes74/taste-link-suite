import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plus, Minus, ShoppingCart, Star } from "lucide-react";

interface MenuItem {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  imagem: string;
  categoria: string;
  destaque?: boolean;
  avaliacao?: number;
}

const menuItems: MenuItem[] = [
  {
    id: 1,
    nome: "Hambúrguer Artesanal",
    descricao: "Blend 180g, queijo cheddar, bacon crocante, alface, tomate, cebola roxa, molho especial",
    preco: 28.90,
    imagem: "🍔",
    categoria: "Hambúrguers",
    destaque: true,
    avaliacao: 4.8
  },
  {
    id: 2,
    nome: "Pizza Margherita",
    descricao: "Molho de tomate, mussarela de búfala, manjericão fresco, azeite extra virgem",
    preco: 42.00,
    imagem: "🍕",
    categoria: "Pizzas",
    avaliacao: 4.9
  },
  {
    id: 3,
    nome: "Salmão Grelhado",
    descricao: "Filé de salmão grelhado, risotto de limão siciliano, aspargos verdes",
    preco: 68.00,
    imagem: "🐠",
    categoria: "Peixes",
    destaque: true,
    avaliacao: 4.7
  },
  {
    id: 4,
    nome: "Açaí Premium",
    descricao: "Açaí cremoso, granola artesanal, banana, morango, mel, coco ralado",
    preco: 18.50,
    imagem: "🍓",
    categoria: "Sobremesas",
    avaliacao: 4.6
  }
];

const categorias = ["Todos", "Hambúrguers", "Pizzas", "Peixes", "Sobremesas"];

const MenuDemo = () => {
  const [categoriaAtiva, setCategoriaAtiva] = useState("Todos");
  const [carrinho, setCarrinho] = useState<{[key: number]: number}>({});
  
  const itemsFiltrados = categoriaAtiva === "Todos" 
    ? menuItems 
    : menuItems.filter(item => item.categoria === categoriaAtiva);
    
  const adicionarAoCarrinho = (itemId: number) => {
    setCarrinho(prev => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1
    }));
  };
  
  const removerDoCarrinho = (itemId: number) => {
    setCarrinho(prev => {
      const novoCarrinho = { ...prev };
      if (novoCarrinho[itemId] > 1) {
        novoCarrinho[itemId]--;
      } else {
        delete novoCarrinho[itemId];
      }
      return novoCarrinho;
    });
  };
  
  const totalItens = Object.values(carrinho).reduce((sum, qty) => sum + qty, 0);
  const totalPreco = Object.entries(carrinho).reduce((sum, [itemId, qty]) => {
    const item = menuItems.find(i => i.id === Number(itemId));
    return sum + (item ? item.preco * qty : 0);
  }, 0);

  return (
    <div className="max-w-md mx-auto bg-white rounded-2xl shadow-elegant overflow-hidden">
      {/* Header do Restaurante */}
      <div className="bg-gradient-primary p-6 text-white text-center">
        <h2 className="text-2xl font-heading font-bold mb-1">Restaurante Demo</h2>
        <p className="opacity-90">Mesa 5 • QR Code Ativo</p>
      </div>
      
      {/* Navegação por Categorias */}
      <div className="p-4 border-b">
        <div className="flex gap-2 overflow-x-auto pb-2">
          {categorias.map(categoria => (
            <Button
              key={categoria}
              variant={categoriaAtiva === categoria ? "default" : "outline"}
              size="sm"
              onClick={() => setCategoriaAtiva(categoria)}
              className="whitespace-nowrap"
            >
              {categoria}
            </Button>
          ))}
        </div>
      </div>
      
      {/* Lista de Produtos */}
      <div className="p-4 space-y-4 max-h-96 overflow-y-auto">
        {itemsFiltrados.map(item => (
          <Card key={item.id} className="border-0 shadow-sm hover:shadow-md transition-fast">
            <CardContent className="p-4">
              <div className="flex gap-3">
                <div className="text-4xl">{item.imagem}</div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-semibold text-foreground flex items-center gap-2">
                        {item.nome}
                        {item.destaque && <Badge variant="secondary" className="text-xs">Destaque</Badge>}
                      </h3>
                      {item.avaliacao && (
                        <div className="flex items-center gap-1 mt-1">
                          <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                          <span className="text-xs text-muted-foreground">{item.avaliacao}</span>
                        </div>
                      )}
                    </div>
                    <span className="font-bold text-lg text-primary">
                      R$ {item.preco.toFixed(2).replace('.', ',')}
                    </span>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                    {item.descricao}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {carrinho[item.id] > 0 && (
                        <>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => removerDoCarrinho(item.id)}
                            className="w-8 h-8 p-0"
                          >
                            <Minus className="w-3 h-3" />
                          </Button>
                          <span className="w-8 text-center font-semibold">
                            {carrinho[item.id]}
                          </span>
                        </>
                      )}
                      <Button
                        size="sm"
                        variant="primary"
                        onClick={() => adicionarAoCarrinho(item.id)}
                        className="w-8 h-8 p-0"
                      >
                        <Plus className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      {/* Carrinho Fixo */}
      {totalItens > 0 && (
        <div className="p-4 border-t bg-gradient-subtle">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <ShoppingCart className="w-5 h-5 text-primary" />
              <span className="font-semibold">{totalItens} {totalItens === 1 ? 'item' : 'itens'}</span>
            </div>
            <span className="font-bold text-lg text-primary">
              R$ {totalPreco.toFixed(2).replace('.', ',')}
            </span>
          </div>
          <Button className="w-full" variant="primary">
            Fazer Pedido
          </Button>
        </div>
      )}
    </div>
  );
};

export default MenuDemo;