# 1. IMPORTAR Flask e bibliotecas necessárias
from flask import Flask, jsonify, request
from flask_cors import CORS

# 2. CRIAR a aplicação Flask
app = Flask(__name__)
CORS(app) # Libera o acesso para o seu front-end (HTML/JS)

# 3. ROTA /login - receber e-mail e senha, validar usuário
@app.route('/api/login', methods=['POST'])
def login():
    return jsonify({"status": "pendente", "mensagem": "Rota de login pronta para receber lógica"})

# 4. ROTA /financeiro - receber e salvar lançamentos
@app.route('/api/financeiro', methods=['GET', 'POST'])
def financeiro():
    return jsonify({"status": "pendente", "mensagem": "Rota do financeiro conectada"})

# 5. ROTA /produtos - buscar produtos por nome/categoria
@app.route('/api/produtos', methods=['GET'])
def produtos():
    return jsonify({"status": "pendente", "mensagem": "Rota de produtos conectada"})

# 6. ROTA /assistente - receber pergunta e enviar para a IA
@app.route('/api/assistente', methods=['POST'])
def assistente():
    return jsonify({"status": "pendente", "mensagem": "Rota da IA conectada"})

# 7. ROTA /relatorios - retornar dados financeiros do período
@app.route('/api/relatorios', methods=['GET'])
def relatorios():
    return jsonify({"status": "pendente", "mensagem": "Rota de relatórios conectada"})

# 8. ROTA /perfil - retornar e atualizar dados da empresa
@app.route('/api/perfil', methods=['GET', 'PUT'])
def perfil():
    return jsonify({"status": "pendente", "mensagem": "Rota de perfil conectada"})

# Uma rota extra só para testar se o servidor tá online
@app.route('/api/status', methods=['GET'])
def status():
    return jsonify({"status": "sucesso", "mensagem": "Servidor RunWise online!"})

# 9. INICIAR o servidor Flask
if __name__ == '__main__':
    app.run(debug=True, port=5000)