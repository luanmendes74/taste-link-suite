import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { ChefHat, ArrowLeft, Plus } from "lucide-react";
import { User, Session } from "@supabase/supabase-js";

const MenuManager = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session);
        setUser(session?.user ?? null);
      }
    );

    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (!loading && !user) {
      navigate("/auth");
    }
  }, [user, loading, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Carregando...</p>
      </div>
    );
  }

  if (!user) return null;

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" onClick={() => navigate("/dashboard")}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar
            </Button>
            <div className="flex items-center gap-2">
              <ChefHat className="w-8 h-8 text-primary" />
              <h1 className="text-2xl font-bold">Gerenciar Cardápio</h1>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-2">Itens do Cardápio</h2>
            <p className="text-muted-foreground">
              Gerencie os itens do seu cardápio digital
            </p>
          </div>
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            Adicionar Item
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Nenhum item cadastrado</CardTitle>
            <CardDescription>
              Comece adicionando itens ao seu cardápio
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Clique no botão "Adicionar Item" para começar a criar seu cardápio digital.
            </p>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default MenuManager;