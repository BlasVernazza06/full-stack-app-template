'use client'

import { Button } from "@repo/ui/components/ui/button";
import { Github } from "lucide-react";

export function OAuthButtons() {
    const handleSignIn = async (provider: "google" | "github") => {
        // Implementación de OAuth aquí
        console.log("Signing in with", provider);
    }

    return (
        <div className="grid grid-cols-2 gap-4">
            <Button 
                variant="outline" 
                onClick={() => handleSignIn("github")}
                className="rounded-xl h-12 border-[#E2E8F0] hover:bg-[#FAFBFC] transition-all font-bold text-xs uppercase tracking-widest"
            >
                <Github className="mr-2 h-4 w-4" />
                Github
            </Button>
            <Button 
                variant="outline" 
                onClick={() => handleSignIn("google")}
                className="rounded-xl h-12 border-[#E2E8F0] hover:bg-[#FAFBFC] transition-all font-bold text-xs uppercase tracking-widest"
            >
                {/* Reemplazar con icono de Google si existe */}
                Google
            </Button>
        </div>
    );
}
