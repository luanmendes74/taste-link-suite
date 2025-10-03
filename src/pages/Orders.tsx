import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChefHat, ArrowLeft } from "lucide-react";
import { User, Session } from "@supabase/supabase-js";

const Orders = () => {
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
              <h1 className="text-2xl font-bold">Pedidos</h1>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">Pedidos em Tempo Real</h2>
          <p className="text-muted-foreground">
            Acompanhe e gerencie os pedidos do seu restaurante
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Nenhum pedido no momento</CardTitle>
            <CardDescription>
              Os pedidos aparecerão aqui em tempo real
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Quando clientes fizerem pedidos através do QR Code, eles aparecerão aqui automaticamente.
            </p>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Orders;