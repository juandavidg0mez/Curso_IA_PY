dict_parse_count_graph = {}

def identify_node(graph):
    parts_entry_nodes = graph.split(";")
    for part in parts_entry_nodes:
        node, edges = part.split(":")
        dict_parse_count_graph[node] = list(edges)
    return dict_parse_count_graph

def identify_arista(graph):
    pass

def count_comications(graph):
    pass

test_graph = "A:BCD;B:;C:D;D:BC"
print(identify_node(test_graph))