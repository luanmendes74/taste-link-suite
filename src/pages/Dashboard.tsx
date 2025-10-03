import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { ChefHat, LogOut, Menu, ShoppingBag, Settings } from "lucide-react";
import { User, Session } from "@supabase/supabase-js";

const Dashboard = () => {
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

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast.error("Erro ao sair");
    } else {
      toast.success("Logout realizado com sucesso!");
      navigate("/");
    }
  };

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
          <div className="flex items-center gap-2">
            <ChefHat className="w-8 h-8 text-primary" />
            <h1 className="text-2xl font-bold">CardápioTech</h1>
          </div>
          <Button variant="outline" onClick={handleLogout}>
            <LogOut className="w-4 h-4 mr-2" />
            Sair
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">Dashboard</h2>
          <p className="text-muted-foreground">
            Bem-vindo de volta, {user.user_metadata?.full_name || user.email}!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="cursor-pointer hover:shadow-lg transition-shadow" onClick={() => navigate("/menu-manager")}>
            <CardHeader>
              <Menu className="w-12 h-12 text-primary mb-4" />
              <CardTitle>Gerenciar Cardápio</CardTitle>
              <CardDescription>
                Adicione e edite itens do seu cardápio digital
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full">Acessar</Button>
            </CardContent>
          </Card>

          <Card className="cursor-pointer hover:shadow-lg transition-shadow" onClick={() => navigate("/orders")}>
            <CardHeader>
              <ShoppingBag className="w-12 h-12 text-primary mb-4" />
              <CardTitle>Pedidos</CardTitle>
              <CardDescription>
                Visualize e gerencie pedidos em tempo real
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full">Acessar</Button>
            </CardContent>
          </Card>

          <Card className="cursor-pointer hover:shadow-lg transition-shadow" onClick={() => navigate("/settings")}>
            <CardHeader>
              <Settings className="w-12 h-12 text-primary mb-4" />
              <CardTitle>Configurações</CardTitle>
              <CardDescription>
                Configure seu restaurante e perfil
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full">Acessar</Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;