from flask import Flask, jsonify, request
from flask_cors import CORS
import hashlib
import json
import os

app = Flask(__name__)
CORS(app)

def ler_usuarios():
    if not os.path.exists('usuarios.json'):
        return {}
    with open('usuarios.json', 'r') as f:
        return json.load(f)

def salvar_usuarios(usuarios):
    with open('usuarios.json', 'w') as f:
        json.dump(usuarios, f, indent=4)

def ler_dados():
    if not os.path.exists('dados.json'):
        return {"saldo": 0, "receitas": 0, "despesas": 0, "lancamentos": []}
    with open('dados.json', 'r') as f:
        return json.load(f)

def salvar_dados(dados):
    with open('dados.json', 'w') as f:
        json.dump(dados, f, indent=4)

def criptografar(senha):
    return hashlib.md5(senha.encode()).hexdigest()


@app.route('/api/status')
def status():
    return jsonify({"mensagem": "Servidor online!"})


@app.route('/api/cadastro', methods=['POST'])
def cadastro():
    dados = request.get_json()
    email = dados.get('email')
    senha = dados.get('senha')
    empresa = dados.get('empresa')

    usuarios = ler_usuarios()

    if email in usuarios:
        return jsonify({"status": "erro", "mensagem": "Email já cadastrado!"})

    usuarios[email] = {
        "senha": criptografar(senha),
        "empresa": empresa
    }
    salvar_usuarios(usuarios)
    return jsonify({"status": "ok", "mensagem": "Cadastro feito!"})


@app.route('/api/login', methods=['POST'])
def login():
    dados = request.get_json()
    email = dados.get('email')
    senha = dados.get('senha')

    usuarios = ler_usuarios()

    if email not in usuarios:
        return jsonify({"status": "erro", "mensagem": "Email não encontrado!"})

    if usuarios[email]['senha'] != criptografar(senha):
        return jsonify({"status": "erro", "mensagem": "Senha incorreta!"})

    return jsonify({"status": "ok", "empresa": usuarios[email]['empresa']})


@app.route('/api/dashboard')
def dashboard():
    dados = ler_dados()
    return jsonify({
        "saldo": dados['saldo'],
        "receitas": dados['receitas'],
        "despesas": dados['despesas']
    })


@app.route('/api/financeiro', methods=['GET', 'POST'])
def financeiro():
    dados = ler_dados()

    if request.method == 'GET':
        return jsonify(dados['lancamentos'])

    novo = request.get_json()
    dados['lancamentos'].append(novo)

    if novo['tipo'] == 'receita':
        dados['receitas'] += novo['valor']
        dados['saldo'] += novo['valor']
    else:
        dados['despesas'] += novo['valor']
        dados['saldo'] -= novo['valor']

    salvar_dados(dados)
    return jsonify({"status": "ok"})


@app.route('/api/perfil', methods=['GET', 'PUT'])
def perfil():
    usuarios = ler_usuarios()
    email = request.args.get('email')

    if email not in usuarios:
        return jsonify({"status": "erro", "mensagem": "Usuário não encontrado"})

    if request.method == 'GET':
        return jsonify({"empresa": usuarios[email]['empresa']})

    novos_dados = request.get_json()
    usuarios[email]['empresa'] = novos_dados.get('empresa')
    salvar_usuarios(usuarios)
    return jsonify({"status": "ok"})


if __name__ == '__main__':
    app.run(debug=True, port=5000)