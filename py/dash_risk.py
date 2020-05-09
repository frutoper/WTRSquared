import itertools
import dash
import dash_core_components as dcc
import dash_html_components as html
import dash_table
import plotly.graph_objs as go
import plotly.figure_factory as ff
from dash.dependencies import Input, Output, State
import pandas as pd
from os import listdir
from os.path import isfile, join
import numpy as np 
import random
from statistics import mean

import logging
import sys

import pandas as pd
from IPython.core.display import display, HTML

# Add the path to the POp codebase if it isn't already there
external_stylesheets = ['https://codepen.io/chriddyp/pen/bWLwgP.css']
app = dash.Dash(__name__, external_stylesheets=external_stylesheets)

def die_roll(num):
    die_list = []
    for x in range(num):
        die_list.append(random.randint(1,6))
    die_list.sort(reverse=True)
    return die_list


def roll_result(attack_num, defend_num):
    attack_list = die_roll(attack_num)
    defend_list = die_roll(defend_num)
    attack_wins = []
    for x in range(min(attack_num, defend_num)):
        attack_wins.append(attack_list[x] > defend_list[x])
    return attack_wins


def battle_result(total_attackers, total_defenders, all_out):
    if all_out:
        do_while = 1
    else:
        do_while = 3
    while total_attackers > do_while and total_defenders > 0:
        if total_attackers >= 4:
            attackers = 3
        else:
            attackers = total_attackers
        if total_defenders > 1:
            defenders = 2
        else:
            defenders = total_defenders
        rr = roll_result(attackers, defenders)
        for j in rr:
            if j:
                total_defenders -= 1                 
            else:
                total_attackers -= 1
    return total_attackers, total_defenders


def war_results(total_attackers, defenders_list, all_out):
    if all_out:
        do_while = 1
    else:
        do_while = 3
    for j in range(len(defenders_list)):
        total_attackers, defenders_list[j] = battle_result(total_attackers, defenders_list[j], all_out)
        if defenders_list[j] == 0:
            total_attackers -= 1
    return total_attackers, defenders_list


def sim_battle(sims, total_attackers, defenders_list, all_out):
    s_list = []
    for s in range(sims):
        s_list.append(war_results(total_attackers, defenders_list.copy(), all_out))
    return s_list


app.layout = html.Div(
    className="container scalable",
    children=[
        html.Div(
            id="banner",
            className="banner",
            children=[
                html.H1("RISK Dash H1")
            ],
        ),
        html.Div(
            style={
                'display':'flex',
                'justify-content': 'space-between',
                'padding-top': '10px',
                'padding-right': '40px',
                'padding-bottom': '10px',
                'padding-left': '40px',
                },
   children=[
            dcc.Input(
                id='armies',
                type='number',
                value=10
            ),
            dcc.Dropdown(
                id='enemy',
                options=[
            {'label': '1', 'value': 1 },
            {'label': '2', 'value': 2},
            {'label': '3', 'value': 3}
        ],
                value=1,
                multi=True
                ),
            dcc.Input(
                id='sims',
                type='number',
                value=10000
            ),
            ],
   )
        ]
)



if __name__ == '__main__':app.run_server(debug=True, port=15044)

 


