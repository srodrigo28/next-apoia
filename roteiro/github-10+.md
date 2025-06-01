1. git clone
Copia um repositório remoto para o seu ambiente local.
git clone https://github.com/seu-usuario/seu-repositorio.git

2. git status
Mostra o estado atual do repositório, incluindo alterações pendentes e informações sobre a branch atual.
git status

3. git add
Adiciona arquivos ao estágio para serem incluídos no próximo commit.

git add arquivo.txt   # Adiciona um arquivo específico
git add .             # Adiciona todos os arquivos modificados

4. git commit
Salva alterações no histórico do repositório.
git commit -m "Mensagem descritiva do que foi alterado"

5. git push
Envia commits locais para o repositório remoto no GitHub.
git push origin branch

6. git pull
Atualiza seu repositório local com as mudanças do repositório remoto.
git pull origin branch

7. git checkout
Alterna entre branches ou recupera versões anteriores de arquivos.
git checkout nome-da-branch   # Troca para outra branch
git checkout arquivo.txt      # Recupera uma versão anterior de um arquivo

8. git branch
Gerencia branches do repositório.
git branch              # Lista todas as branches
git branch nome-da-branch  # Cria uma nova branch
git branch -d nome-da-branch # Deleta uma branch

9. git merge
Combina alterações de uma branch em outra.
git merge nome-da-branch

10. git log
Mostra o histórico de commits.
git log                  # Histórico completo
git log --oneline        # Histórico resumido